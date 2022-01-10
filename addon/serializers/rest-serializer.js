import { RestSerializer } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @class DeprecatedRestSerializer
 @hide
 */
export default class DeprecatedRestSerializer extends RestSerializer {
  constructor(...args) {
    deprecateNestedImport(
      "Importing 'RestSerializer' from 'ember-cli-mirage/serializers/rest-serializer' is deprecated. " +
        "Add the `miragejs` package to devDependencies and use `import { RestSerializer } from 'miragejs';` instead."
    );

    super(...args);
  }
}
