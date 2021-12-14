import { Collection } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @class DeprecatedCollection
 @hide
 */
export default class DeprecatedCollection extends Collection {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'Collection' from 'ember-cli-mirage/orm/collection' is deprecated. ` +
        `Install the \`miragejs\` package and use \`import { Collection } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
