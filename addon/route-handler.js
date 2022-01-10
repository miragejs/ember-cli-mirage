import { _RouteHandler } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

/**
 @class DeprecatedRouteHandler
 @hide
 */
export default class DeprecatedRouteHandler extends _RouteHandler {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'RouteHandler' from 'ember-cli-mirage/route-handler' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _RouteHandler } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
