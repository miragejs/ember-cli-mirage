import { _SerializerRegistry } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

/**
 @class DeprecatedSerializerRegistry
 @hide
 */
export default class DeprecatedSerializerRegistry extends _SerializerRegistry {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'SerializerRegistry' from 'ember-cli-mirage/serializer-registry' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _SerializerRegistry } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
