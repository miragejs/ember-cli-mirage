import { ActiveModelSerializer } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @class DeprecatedActiveModelSerializer
 @hide
 */
export default class DeprecatedActiveModelSerializer extends ActiveModelSerializer {
  constructor(...args) {
    deprecateNestedImport(
      "Importing 'ActiveModelSerializer' from 'ember-cli-mirage/serializers/active-model-serializer' is deprecated. " +
        "Add the `miragejs` package to devDependencies and use `import { ActiveModelSerializer } from 'miragejs';` instead."
    );

    super(...args);
  }
}
