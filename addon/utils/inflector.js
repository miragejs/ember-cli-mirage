import capitalize from 'lodash/upperFirst';
import dasherize from 'lodash/kebabCase';
import underscore from 'lodash/snakeCase';
import camelCase from 'lodash/camelCase';

/*
  Lodash's camelCase removes slashes, Ember's doesn't. We originally used
  Ember.String.camelize.
*/
const camelize = str => {
  return str.split('/')
    .map(piece => camelCase(piece))
    .join('/');
};

export { singularize, pluralize } from 'ember-inflector';
export { capitalize, camelize, dasherize, underscore };
