import { _ormAssociationsBelongsTo } from 'miragejs';
import { deprecateNestedImport } from '../../deprecate-imports';

/**
 @class DeprecatedBelongsTo
 @hide
 */
export default class DeprecatedBelongsTo extends _ormAssociationsBelongsTo {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'BelongsTo' from 'ember-cli-mirage/orm/associations/belongs-to' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _ormAssociationsBelongsTo } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
