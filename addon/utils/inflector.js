import Inflector from '@miragejs/server/lib/utils/inflector';
export * from '@miragejs/server/lib/utils/inflector';

/*
  Keeping these tests here for now to avoid accidental breakage, but they are
  definitely an Ember Mirage thing, not a Mirage thing.
*/
export { singularize, pluralize } from 'ember-inflector';

export default Inflector;
