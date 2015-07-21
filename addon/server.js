import { pluralize } from './utils/inflector';
import Pretender from 'pretender';
import Db from './db';
import Schema from './orm/schema';
import controller from './controller';

/*
  The Mirage server, which has a db and an XHR interceptor.
  Requires an environment.
*/
export default class Server {

  constructor(options) {
    if (!options || !options.environment) {
      throw "You must pass an environment in when creating a Mirage server instance";
    }

    this.environment = options.environment;
    this.timing = 400;
    this.namespace = '';

    this._setupStubAliases();

    /*
      Pretender instance with default config.

      TODO: Inject?
    */
    this.interceptor = new Pretender(function() {
      this.prepareBody = function(body) {
        return body ? JSON.stringify(body) : '{"error": "not found"}';
      };

      this.unhandledRequest = function(verb, path) {
        path = decodeURI(path);
        console.error("Mirage: Your Ember app tried to " + verb + " '" + path +
                      "', but there was no route defined to handle this " +
                      "request. Define a route that matches this path in your " +
                      "mirage/config.js file.");
      };
    });
    this.pretender = this.interceptor; // alias

    this.responseQueues = {};

    /*
      Db instance

      TODO: Inject?
    */
    this.db = new Db();

    if (options.modelsMap) {
      this.schema = new Schema(this.db);
      this.schema.registerModels(options.modelsMap);
    }

    // TODO: Better way to inject server into test env
    if (this.environment === 'test') {
      window.server = this;
    }
  }

  responseQueue(verb, path) {
    var key = [verb.toUpperCase(), this.normalizePath(path)].join('');
    return this.responseQueues[key] || (this.responseQueues[key] = []);
  }

  nextQueuedResponse(verb, path) {
    var queue = this.responseQueue(verb, path);
    return queue.shift();
  }

  queueResponse(verb, path, handler) {
    var queue = this.responseQueue(verb, path);
    return queue.push(handler);
  }

  loadConfig(config) {
    config.call(this);
    this.timing = this.environment === 'test' ? 0 : (this.timing || 0);
  }

  normalizePath(path) {
    return path[0] === '/' ? path.slice(1) : path;
  }

  // TODO: Move all this logic to another object (route?)
  stub(verb, path, handler, code, options) {
    var _this = this;
    path = this.normalizePath(path);

    this.interceptor[verb].call(this.interceptor, this.namespace + '/' + path, function(request) {

      var nextHandler = _this.nextQueuedResponse(verb, path) || handler;
      var response = controller.handle(verb, nextHandler, (_this.schema || _this.db), request, code, options);
      var shouldLog = typeof _this.logging !== 'undefined' ? _this.logging : (_this.environment !== 'test');

      if (shouldLog) {
        console.log('Successful request: ' + verb.toUpperCase() + ' ' + request.url);
        console.log(response[2]);
      }

      return response;
    }, function() { return _this.timing; });
  }

  /*
    Factory methods
  */
  loadFactories(factoryMap) {
    var _this = this;
    // Store a reference to the factories
    this._factoryMap = factoryMap;

    // Create a collection for each factory
    _.keys(factoryMap).forEach(function(type) {
      _this.db.createCollection(pluralize(type));
    });
  }

  create(type, overrides) {
    var collection = pluralize(type);
    var currentRecords = this.db[collection];
    var sequence = currentRecords ? currentRecords.length: 0;
    if (!this._factoryMap || !this._factoryMap[type]) {
      throw "You're trying to create a " + type + ", but no factory for this type was found";
    }
    var OriginalFactory = this._factoryMap[type];
    var Factory = OriginalFactory.extend(overrides);
    var factory = new Factory();

    var attrs = factory.build(sequence);
    return this.db[collection].insert(attrs);
  }

  createList(type, amount, overrides) {
    var list = [];

    for (var i = 0; i < amount; i++) {
      list.push(this.create(type, overrides));
    }

    return list;
  }

  shutdown() {
    this.pretender.shutdown();
  }

  _setupStubAliases() {
    var _this = this;

    [['get'], ['post'], ['put'], ['delete', 'del'], ['patch']].forEach(function(names) {
      var verb = names[0];
      var alias = names[1];

      _this[verb] = function(/* path, handler, code, options */) {
        var args = _this._extractStubArguments.apply(this, arguments);
        args.unshift(verb);
        this.stub.apply(this, args);
      };

      if (alias) { _this[alias] = _this[verb]; }
    });
  }

  /*
    Given a variable number of arguments, it generates an array of with
    [path, handler, code, options], `path` and `options` being always defined,
    and `handler` and `code` being undefined if not suplied.
  */
  _extractStubArguments(/* path, handler, code, options */) {
    var ary = Array.prototype.slice.call(arguments);
    var argsInitialLength = ary.length;
    var lastArgument = ary[ary.length - 1];
    var options;
    var i = 0;
    if (lastArgument.constructor === Object) {
      argsInitialLength--;
    } else {
      options = { colesce: false };
      ary.push(options);
    }
    for(; i < 5 - ary.length; i++) {
      ary.splice(argsInitialLength, 0, undefined);
    }
    return ary;
  }

}
