import { _ormSchema } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @class DeprecatedSchema
 @hide
 */
export default class DeprecatedSchema extends _ormSchema {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'Schema' from 'ember-cli-mirage/orm/schema' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _ormSchema } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
