import { Factory } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

/**
 @class DeprecatedFactory
 @hide
 */
export default class DeprecatedFactory extends Factory {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'Factory' from 'ember-cli-mirage/factory' is deprecated. ` +
        `Install the \`miragejs\` package and use \`import { Factory } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
