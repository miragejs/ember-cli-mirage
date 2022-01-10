import {
  _utilsInflectorCamelize,
  _utilsInflectorDasherize,
  _utilsInflectorUnderscore,
  _utilsInflectorCapitalize,
} from 'miragejs';
import {
  singularize as _singularize,
  pluralize as _pluralize,
} from 'ember-inflector';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @function getMessage
 @hide
 */
function getMessage(importName) {
  return (
    `Importing '${importName}' from 'ember-cli-mirage/utils/inflector' is deprecated. ` +
    `Install the \`@ember/string\` package and use ` +
    `\`import { ${importName} } from '@ember/string';\` instead.`
  );
}

/**
 @function camelize
 @hide
 */
export function camelize(...args) {
  deprecateNestedImport(getMessage('camelize'));

  return _utilsInflectorCamelize(...args);
}

/**
 @function dasherize
 @hide
 */
export function dasherize(...args) {
  deprecateNestedImport(getMessage('dasherize'));

  return _utilsInflectorDasherize(...args);
}

/**
 @function underscore
 @hide
 */
export function underscore(...args) {
  deprecateNestedImport(getMessage('underscore'));

  return _utilsInflectorUnderscore(...args);
}

/**
 @function capitalize
 @hide
 */
export function capitalize(...args) {
  deprecateNestedImport(getMessage('capitalize'));

  return _utilsInflectorCapitalize(...args);
}

/**
 @function singularize
 @hide
 */
export function singularize(...args) {
  deprecateNestedImport(getMessage('singularize'));

  return _singularize(...args);
}

/**
 @function pluralize
 @hide
 */
export function pluralize(...args) {
  deprecateNestedImport(getMessage('pluralize'));

  return _pluralize(...args);
}
