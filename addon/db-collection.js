import { _DbCollection } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

/**
 @class DeprecatedDbCollection
 @hide
 */
export default class DeprecatedDbCollection extends _DbCollection {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'DbCollection' from 'ember-cli-mirage/db-collection' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _DbCollection } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
