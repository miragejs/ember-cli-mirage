/* global requirejs, require */
/* eslint-env node */
'use strict';

import { assert } from '@ember/debug';
import _camelCase from 'lodash/camelCase';
import { pluralize } from 'ember-cli-mirage/utils/inflector';
import require from 'require';

/*
  This function looks through all files that have been loaded by Ember CLI and
  finds the ones under /mirage/[factories, fixtures, scenarios, models]/, and exports
  a hash containing the names of the files as keys and the data as values.
*/
export default function(prefix) {
  let modules = ['factories', 'fixtures', 'scenarios', 'models', 'serializers', 'identity-managers'];
  let mirageModuleRegExp = new RegExp(`^${prefix}/mirage/(${modules.join('|')})`);
  let modulesMap = modules.reduce((memo, name) => {
    memo[_camelCase(name)] = {};
    return memo;
  }, {});

  Object.keys(requirejs.entries).filter(function(key) {
    return mirageModuleRegExp.test(key);
  }).forEach(function(moduleName) {
    if (moduleName.match('.jshint')) { // ignore autogenerated .jshint files
      return;
    }
    let moduleParts = moduleName.split('/');
    let moduleType = _camelCase(moduleParts[moduleParts.length - 2]);
    let moduleKey = moduleParts[moduleParts.length - 1];

    if (moduleType === 'scenario') {
      assert('Only scenario/default.js is supported at this time.',
        moduleKey !== 'default');
    }

    /*
      Ensure fixture keys are pluralized
    */
    if (moduleType === 'fixtures') {
      moduleKey = pluralize(moduleKey);
    }

    let module = require(moduleName, null, null, true);
    if (!module) {
      throw new Error(`${moduleName} must export a ${moduleType}`);
    }

    let data = module.default;

    modulesMap[moduleType][_camelCase(moduleKey)] = data;
  });

  return modulesMap;
}
