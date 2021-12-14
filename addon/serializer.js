import { Serializer } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

/**
 @class DeprecatedSerializer
 @hide
 */
export default class DeprecatedSerializer extends Serializer {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'Serializer' from 'ember-cli-mirage/serializer' is deprecated. ` +
        `Install the \`miragejs\` package and use \`import { Serializer } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
