export {
  _utilsInflectorCamelize as camelize,
  _utilsInflectorDasherize as dasherize,
  _utilsInflectorUnderscore as underscore,
  _utilsInflectorCapitalize as capitalize
} from '@miragejs/server';

/*
  Keeping these tests here for now to avoid accidental breakage, but they are
  definitely an Ember Mirage thing, not a Mirage thing.
*/
export { singularize, pluralize } from 'ember-inflector';
