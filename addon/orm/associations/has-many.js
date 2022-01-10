import { _ormAssociationsHasMany } from 'miragejs';
import { deprecateNestedImport } from '../../deprecate-imports';

/**
 @class DeprecatedHasMany
 @hide
 */
export default class DeprecatedHasMany extends _ormAssociationsHasMany {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'HasMany' from 'ember-cli-mirage/orm/associations/has-many' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _ormAssociationsHasMany } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
