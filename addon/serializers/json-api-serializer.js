import { JSONAPISerializer } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @class DeprecatedJSONAPISerializer
 @hide
 */
export default class DeprecatedJSONAPISerializer extends JSONAPISerializer {
  constructor(...args) {
    deprecateNestedImport(
      "Importing 'JSONAPISerializer' from 'ember-cli-mirage/serializers/json-api-serializer' is deprecated. " +
        "Add the `miragejs` package to devDependencies and use `import { JSONAPISerializer } from 'miragejs';` instead."
    );

    super(...args);
  }
}
