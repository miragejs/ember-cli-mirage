import { _routeHandlersBase } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @class DeprecatedBaseRouteHandler
 @hide
 */
export default class DeprecatedBaseRouteHandler extends _routeHandlersBase {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'BaseRouteHandler' from 'ember-cli-mirage/route-handlers/base' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _routeHandlersBase } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
