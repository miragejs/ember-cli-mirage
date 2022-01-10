import { _routeHandlersShorthandsBase } from 'miragejs';
import { deprecateNestedImport } from '../../deprecate-imports';

/**
 @class DeprecatedBaseShorthandRouteHandler
 @hide
 */
export default class DeprecatedBaseShorthandRouteHandler extends _routeHandlersShorthandsBase {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'BaseShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/base' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsBase } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
