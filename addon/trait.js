import { trait } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

/**
 @function trait
 @hide
 */
export default function (...args) {
  deprecateNestedImport(
    "Importing 'trait' from 'ember-cli-mirage/trait' is deprecated. " +
      "Add the `miragejs` package to devDependencies and use `import { trait } from 'miragejs';` instead."
  );

  return trait(...args);
}
