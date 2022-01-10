import { _ormAssociationsAssociation } from 'miragejs';
import { deprecateNestedImport } from '../../deprecate-imports';

/**
 @class DeprecatedAssociation
 @hide
 */
export default class DeprecatedAssociation extends _ormAssociationsAssociation {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'Association' from 'ember-cli-mirage/orm/associations/association' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _ormAssociationsAssociation } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
