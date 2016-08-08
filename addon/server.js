// jscs:disable requireParenthesesAroundArrowParam
/* global requirejs, require */

import { pluralize, camelize } from './utils/inflector';
import Pretender from 'pretender';
import Db from './db';
import Schema from './orm/schema';
import assert from './assert';
import SerializerRegistry from './serializer-registry';
import RouteHandler from './route-handler';

import _isArray from 'lodash/lang/isArray';
import _keys from 'lodash/object/keys';
import _pick from 'lodash/object/pick';
import _assign from 'lodash/object/assign';

function createPretender(server) {
  return new Pretender(function() {
    this.passthroughRequest = function(verb, path, request) {
      if (server.shouldLog()) {
        console.log(`Passthrough request: ${verb.toUpperCase()} ${request.url}`);
      }
    };

    this.handledRequest = function(verb, path, request) {
      if (server.shouldLog()) {
        console.log(`Successful request: ${verb.toUpperCase()} ${request.url}`);
        let { responseText } = request;
        let loggedResponse;

        try {
          loggedResponse = JSON.parse(responseText);
        } catch(e) {
          loggedResponse = responseText;
        }

        console.log(loggedResponse);
      }
    };

    this.unhandledRequest = function(verb, path) {
      path = decodeURI(path);
      assert(
        `Your Ember app tried to ${verb} '${path}',
         but there was no route defined to handle this request.
         Define a route that matches this path in your
         mirage/config.js file. Did you forget to add your namespace?`
      );
    };
  });
}

const defaultRouteOptions = {
  coalesce: false,
  timing: undefined
};

const defaultPassthroughs = [
  'http://localhost:0/chromecheckurl'
];
export { defaultPassthroughs };

function isOption(option) {
  if (!option || typeof option !== 'object') {
    return false;
  }

  let allOptions = Object.keys(defaultRouteOptions);
  let optionKeys = Object.keys(option);
  for (let i = 0; i < optionKeys.length; i++) {
    let key = optionKeys[i];
    if (allOptions.indexOf(key) > -1) {
      return true;
    }
  }
  return false;
}

/*
  Args can be of the form
    [options]
    [object, code]
    [function, code]
    [shorthand, options]
    [shorthand, code, options]
    with all optional. This method returns an array of
    [handler (i.e. the function, object or shorthand), code, options].
*/

function extractRouteArguments(args) {
  let [ lastArg ] = args.splice(-1);
  if (isOption(lastArg)) {
    lastArg = _assign({}, defaultRouteOptions, lastArg);
  } else {
    args.push(lastArg);
    lastArg = defaultRouteOptions;
  }
  let t = 2 - args.length;
  while (t-- > 0) {
    args.push(undefined);
  }
  args.push(lastArg);
  return args;
}

export default class Server {

  constructor(options = {}) {
    this.environment = options.environment || 'development';
    this.options = options;
    this.timing = 400;
    this.namespace = '';
    this.urlPrefix = '';

    this._defineRouteHandlerHelpers();

    this.db = new Db();
    this.schema = new Schema(this.db, options.models);
    this.serializerOrRegistry = new SerializerRegistry(this.schema, options.serializers);

    this.pretender = createPretender(this);

    if (options.baseConfig) {
      this.loadConfig(options.baseConfig);
    }

    let hasFactories = this._hasModulesOfType(options, 'factories');
    // If no scenario has been specified on the mirage config we use 'default'.
    if (!this.scenario) {
      this.scenario = 'default';
    }
    // Checking if the scenario is present and has been loaded.
    let hasScenario = options.scenarios && options.scenarios.hasOwnProperty(this.scenario);

    if (this.isTest()) {
      if (options.testConfig) {
        this.loadConfig(options.testConfig);
      }

      window.server = this; // TODO: Better way to inject server into test env
    }

    if (this.isTest() && hasFactories) {
      this.loadFactories(options.factories);
    } else if (!this.isTest() && hasScenario) {
      this.loadFactories(options.factories);
      // Loading the custom scenario. Using array syntax to call the scenario
      // function because we have its name in a variable.
      options.scenarios[this.scenario](this);
    } else {
      this.loadFixtures();
    }

    if (options.useDefaultPassthroughs) {
      this._configureDefaultPassthroughs();
    }
  }

  isTest() {
    return this.environment === 'test';
  }

  shouldLog() {
    return typeof this.logging !== 'undefined' ? this.logging : !this.isTest();
  }

  loadConfig(config) {
    config.call(this);
    this.timing = this.isTest() ? 0 : (this.timing || 0);
  }

  passthrough(...paths) {
    let verbs = ['get', 'post', 'put', 'delete', 'patch'];
    let lastArg = paths[paths.length - 1];

    if (paths.length === 0) {
      // paths = ['http://localhost:7357'];
      paths = ['/**', '/'];
    } else if (_isArray(lastArg)) {
      verbs = paths.pop();
    }

    verbs.forEach(verb => {
      paths.forEach(path => {
        let fullPath = this._getFullPath(path);
        this.pretender[verb](fullPath, this.pretender.passthrough);
      });
    });
  }

  /**
   * This method loads the fixtures, the static data table dumps, to use
   * as initial data for the server db.
   * The fixtures MUST reside inside the [app]/mirage/fixtures folder. If we don't
   * specify anything else this method will load all module definitions inside the
   * main fixtures folder (it will not go inside any sub-folders). If we
   * specify model names this method will load the specified models only.
   * We can also specify folder paths relative to the main fixture folder by
   * using the relative path ending in a slash (/). The method will load all
   * models from that folder. We can also specify the full model path and that
   * will be loaded. Finally we can mix and match fixtures from different folders
   * and the one that will be used to seed the db is going to be the one
   * specified last.
   *
   * @method loadFixtures
   * @param args paths of the model fixtures or folders of model fixtures (ending
   *        with a '/') that we want to use to seed the db.
   * @public
   * @returns udefined
   */
  loadFixtures(...args) {
    if (this.options.hasOwnProperty('fixtures')) {
      // Even though we removed the automathic loading of all available
      // fixtures, we need to keep the old functionality as is, just in case
      // someone has already code where they manually specified the fixtures
      // on the server constructor.
      let { fixtures } = this.options;
      if (args.length) {
        let camelizedArgs = args.map(camelize);
        fixtures = _pick(fixtures, ...camelizedArgs);
      }
      this.db.loadData(fixtures);
    } else {
      // New functionality:
      //
      // Array of fixtures we are going to load.
      let fixtureNames = [];
      // As the fixtures are all stored inside the standard directory we add
      // that path to the info given by the user so we can find them easily.
      if (args.length) {
        fixtureNames = args.map((value) => {
          return `${this.options.modulePrefix}/mirage/fixtures/${value}`;
        });
      } else {
        fixtureNames.push(`${this.options.modulePrefix}/mirage/fixtures/`);
      }
      // We filter all the available module paths to get a list of all the
      // fixtures models available on the mirage directory structure.
      let requireJsFixtureModules = _keys(requirejs.entries).filter(function(key) {
        if (key.indexOf('.jshint') !== -1) { // ignore autogenerated .jshint files
          return false;
        }
        return key.indexOf('/mirage/fixtures/') !== -1;
      });

      // This is were we will store the data from the fixtures we end up loading.
      let modulesMap = {};
      // We need to check if the specified fixture paths match any of the
      // available fixture modules.
      for (let i = 0; i < fixtureNames.length; i++) {
        for (let j = 0; j < requireJsFixtureModules.length; j++) {
          // If the given path matches the available fixture module ...
          let iNameStart = requireJsFixtureModules[j].indexOf(fixtureNames[i]);
          if (iNameStart !== -1) {
            // ... it could be a partial match so we need to make sure that
            // it is either a full path match (the user specified a path
            // up to the model name) or a directory match (the user
            // specified the name of the folder that contain the models
            // he wants to load).
            let tempModuleDef = requireJsFixtureModules[j].substring(iNameStart + fixtureNames[i].length);
            // We know the above if after removing the user specified path
            // from the fixture module path we are left with no subfolders:
            // no extra slashes.
            let tempModuleParts = tempModuleDef.split('/');
            if (tempModuleParts.length === 1) {
              // We we the moduleKey the same way as before: the
              // name of the file has to match the table it has
              // data for.
              let moduleParts =  requireJsFixtureModules[j].split('/');
              let moduleKey = moduleParts[moduleParts.length - 1];
              // Loading and storing the data.
              let module = require(requireJsFixtureModules[j], null, null, true);
              if (!module) {
                throw new Error(`${requireJsFixtureModules[j]} must export a ${moduleKey}`);
              }
              let data = module['default'];
              modulesMap[camelize(moduleKey)] = data;
            }
          }
        }
      }
      this.db.loadData(modulesMap);
    }
  }

  /*
    Factory methods
  */
  loadFactories(factoryMap) {
    // Store a reference to the factories
    this._factoryMap = factoryMap;

    // Create a collection for each factory
    _keys(factoryMap).forEach(type => {
      let collectionName = this.schema ? pluralize(camelize(type)) : pluralize(type);
      this.db.createCollection(collectionName);
    });
  }

  factoryFor(type) {
    let camelizedType = camelize(type);

    if (this._factoryMap && this._factoryMap[camelizedType]) {
      return this._factoryMap[camelizedType];
    }
  }

  build(type, overrides) {
    let camelizedType = camelize(type);

    // Store sequence for factory type as instance variable
    this.factorySequences = this.factorySequences || {};
    this.factorySequences[camelizedType] = this.factorySequences[camelizedType] + 1 || 0;

    let OriginalFactory = this.factoryFor(type);
    if (OriginalFactory) {
      let Factory = OriginalFactory.extend(overrides);
      let factory = new Factory();

      let sequence = this.factorySequences[camelizedType];
      return factory.build(sequence);
    } else {
      return overrides;
    }
  }

  buildList(type, amount, overrides) {
    let list = [];

    for (let i = 0; i < amount; i++) {
      list.push(this.build(type, overrides));
    }

    return list;
  }

  // When there is a Model defined, we should return an instance
  // of it instead of returning the bare attributes.
  create(type, overrides, collectionFromCreateList) {
    let attrs = this.build(type, overrides);
    let modelOrRecord;

    if (this.schema && this.schema[pluralize(camelize(type))]) {
      let modelClass = this.schema[pluralize(camelize(type))];

      modelOrRecord = modelClass.create(attrs);

    } else {
      let collection, collectionName;

      if (collectionFromCreateList) {
        collection = collectionFromCreateList;
      } else {
        collectionName = this.schema ? pluralize(camelize(type)) : pluralize(type);
        collection = this.db[collectionName];
      }

      assert(collection, `You called server.create(${type}) but no model or factory was found. Try \`ember g mirage-model ${type}\`.`);
      modelOrRecord = collection.insert(attrs);
    }

    let OriginalFactory = this.factoryFor(type);
    if (OriginalFactory && OriginalFactory.attrs && OriginalFactory.attrs.afterCreate) {
      OriginalFactory.attrs.afterCreate(modelOrRecord, this);
    }

    return modelOrRecord;
  }

  createList(type, amount, overrides) {
    let list = [];
    let collectionName = this.schema ? pluralize(camelize(type)) : pluralize(type);
    let collection = this.db[collectionName];

    for (let i = 0; i < amount; i++) {
      list.push(this.create(type, overrides, collection));
    }

    return list;
  }

  shutdown() {
    this.pretender.shutdown();
    if (this.environment === 'test') {
      window.server = undefined;
    }
  }

  _defineRouteHandlerHelpers() {
    [['get'], ['post'], ['put'], ['delete', 'del'], ['patch'], ['head']].forEach(([verb, alias]) => {
      this[verb] = (path, ...args) => {
        let [ rawHandler, customizedCode, options ] = extractRouteArguments(args);
        this._registerRouteHandler(verb, path, rawHandler, customizedCode, options);
      };

      if (alias) {
        this[alias] = this[verb];
      }
    });
  }

  _serialize(body) {
    if (body) {
      return typeof body !== 'string' ? JSON.stringify(body) : body;
    } else {
      return '{"error": "not found"}';
    }
  }

  _registerRouteHandler(verb, path, rawHandler, customizedCode, options) {

    let routeHandler = new RouteHandler({
      schema: this.schema,
      verb, rawHandler, customizedCode, options, path,
      serializerOrRegistry: this.serializerOrRegistry
    });

    let fullPath = this._getFullPath(path);
    let timing = options.timing !== undefined ? options.timing : (() => this.timing);

    this.pretender[verb](
      fullPath,
      (request) => {
        let [ code, headers, response ] = routeHandler.handle(request);
        return [ code, headers, this._serialize(response) ];
      },
      timing
    );
  }

  _hasModulesOfType(modules, type) {
    let modulesOfType = modules[type];
    return modulesOfType ? _keys(modulesOfType).length > 0 : false;
  }

  /*
    Builds a full path for Pretender to monitor based on the `path` and
    configured options (`urlPrefix` and `namespace`).
  */
  _getFullPath(path) {
    path = path[0] === '/' ? path.slice(1) : path;
    let fullPath = '';
    let urlPrefix = this.urlPrefix ? this.urlPrefix.trim() : '';
    let namespace = this.namespace ? this.namespace.trim() : '';

    // check to see if path is a FQDN. if so, ignore any urlPrefix/namespace that was set
    if (/^https?:\/\//.test(path)) {
      fullPath += path;
    } else {

      // otherwise, if there is a urlPrefix, use that as the beginning of the path
      if (!!urlPrefix.length) {
        fullPath += urlPrefix[urlPrefix.length - 1] === '/' ? urlPrefix : `${urlPrefix}/`;
      }

      // if a namespace has been configured, add it before the path
      if (!!namespace.length) {
        fullPath += namespace ? `${namespace}/` : namespace;
      }

      // we're at the root, ensure a leading /
      if (!urlPrefix.length && !namespace.length) {
        fullPath += '/';
      }

      // finally add the configured path
      fullPath += path;
    }

    return fullPath;
  }

  _configureDefaultPassthroughs() {
    defaultPassthroughs.forEach(passthroughUrl => {
      this.passthrough(passthroughUrl);
    });
  }
}
