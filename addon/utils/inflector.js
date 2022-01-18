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
 @function getStringMessage
 @hide
 */
function getStringMessage(importName) {
  return (
    `Importing '${importName}' from 'ember-cli-mirage/utils/inflector' is deprecated. ` +
    `Install the \`@ember/string\` package and use ` +
    `\`import { ${importName} } from '@ember/string';\` instead.`
  );
}

/**
 @function getInflectorMessage
 @hide
 */
function getInflectorMessage(importName) {
  return (
    `Importing '${importName}' from 'ember-cli-mirage/utils/inflector' is deprecated. ` +
    `Install the \`ember-inflector\` package and use ` +
    `\`import { ${importName} } from 'ember-inflector';\` instead.`
  );
}

/**
 @function camelize
 @hide
 */
export function camelize(...args) {
  deprecateNestedImport(getStringMessage('camelize'));

  return _utilsInflectorCamelize(...args);
}

/**
 @function dasherize
 @hide
 */
export function dasherize(...args) {
  deprecateNestedImport(getStringMessage('dasherize'));

  return _utilsInflectorDasherize(...args);
}

/**
 @function underscore
 @hide
 */
export function underscore(...args) {
  deprecateNestedImport(getStringMessage('underscore'));

  return _utilsInflectorUnderscore(...args);
}

/**
 @function capitalize
 @hide
 */
export function capitalize(...args) {
  deprecateNestedImport(getStringMessage('capitalize'));

  return _utilsInflectorCapitalize(...args);
}

/**
 @function singularize
 @hide
 */
export function singularize(...args) {
  deprecateNestedImport(getInflectorMessage('singularize'));

  return _singularize(...args);
}

/**
 @function pluralize
 @hide
 */
export function pluralize(...args) {
  deprecateNestedImport(getInflectorMessage('pluralize'));

  return _pluralize(...args);
}
