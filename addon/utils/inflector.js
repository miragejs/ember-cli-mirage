import capitalize from 'lodash/upperFirst';
import dasherize from 'lodash/kebabCase';
import underscore from 'lodash/snakeCase';
import camelCase from 'lodash/camelCase';

// import Inflector from 'ember-inflector';
// import defaultRules from 'ember-inflector/addon/lib/system/inflections';
// // debugger;
// const inflector = new Inflector(defaultRules);
// const singularize = inflector.singularize.bind(inflector);
// const pluralize = inflector.pluralize.bind(inflector);

import { singularize, pluralize } from 'ember-inflector';
// import { singularize, pluralize } from 'ember-inflector/addon/index';
// import singularize from 'ember-inflector/addon/index'

/*
  Lodash's camelCase removes slashes, Ember's doesn't. We originally used
  Ember.String.camelize.
*/
const camelize = str => {
  return str.split('/')
    .map(piece => camelCase(piece))
    .join('/');
};

export { singularize, pluralize };
export { capitalize, camelize, dasherize, underscore };
