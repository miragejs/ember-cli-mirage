import {
  _utilsInflectorCamelize,
  _utilsInflectorDasherize,
  _utilsInflectorUnderscore,
  _utilsInflectorCapitalize
} from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

function getMessage (importName) {
  return `Importing '${importName}' from 'ember-cli-mirage/utils/inflector' is deprecated. ` +
    `Install the \`@ember/string\` package and use ` +
    `\`import { ${importName} } from '@ember/string';\` instead.`;
}

export function camelize (...args) {
  deprecateNestedImport(getMessage('camelize'));

  return _utilsInflectorCamelize(...args);
}

export function dasherize (...args) {
  deprecateNestedImport(getMessage('dasherize'));

  return _utilsInflectorDasherize(...args);
}

export function underscore (...args) {
  deprecateNestedImport(getMessage('underscore'));

  return _utilsInflectorUnderscore(...args);
}

export function capitalize (...args) {
  deprecateNestedImport(getMessage('capitalize'));

  return _utilsInflectorCapitalize(...args);
}

/*
  Keeping these tests here for now to avoid accidental breakage, but they are
  definitely an Ember Mirage thing, not a Mirage thing.
*/
export { singularize, pluralize } from 'ember-inflector';
