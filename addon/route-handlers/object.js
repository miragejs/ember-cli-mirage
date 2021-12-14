import { _routeHandlersObject } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @class DeprecatedObjectRouteHandler
 @hide
 */
export default class DeprecatedObjectRouteHandler extends _routeHandlersObject {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'ObjectRouteHandler' from 'ember-cli-mirage/route-handlers/object' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _routeHandlersObject } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
