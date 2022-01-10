import { Response } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

/**
 @class DeprecatedResponse
 @hide
 */
export default class DeprecatedResponse extends Response {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'Response' from 'ember-cli-mirage/response' is deprecated. ` +
        `Install the \`miragejs\` package and use \`import { Response } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
