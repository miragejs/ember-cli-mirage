import { _ormPolymorphicCollection } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @class DeprecatedPolymorphicCollection
 @hide
 */
export default class DeprecatedPolymorphicCollection extends _ormPolymorphicCollection {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'PolymorphicCollection' from 'ember-cli-mirage/orm/polymorphic-collection' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _ormPolymorphicCollection } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
