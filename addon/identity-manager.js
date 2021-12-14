import { IdentityManager } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

/**
 @class DeprecatedIdentityManager
 @hide
 */
export default class DeprecatedIdentityManager extends IdentityManager {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'IdentityManager' from 'ember-cli-mirage/identity-manager' is deprecated. ` +
        `Install the \`miragejs\` package and use \`import { IdentityManager } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
