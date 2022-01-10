import { association } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

/**
 @function association
 @hide
 */
export default function (...args) {
  deprecateNestedImport(
    "Importing 'association' from 'ember-cli-mirage/association' is deprecated. " +
      "Add the `miragejs` package to devDependencies and use `import { association } from 'miragejs';` instead."
  );

  return association(...args);
}
