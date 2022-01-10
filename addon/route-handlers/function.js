import { _routeHandlersFunction } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @class DeprecatedFunctionRouteHandler
 @hide
 */
export default class DeprecatedFunctionRouteHandler extends _routeHandlersFunction {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'FunctionRouteHandler' from 'ember-cli-mirage/route-handlers/function' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _routeHandlersFunction } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
