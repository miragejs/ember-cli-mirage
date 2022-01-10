import { _routeHandlersShorthandsGet } from 'miragejs';
import { deprecateNestedImport } from '../../deprecate-imports';

/**
 @class DeprecatedGetShorthandRouteHandler
 @hide
 */
export default class DeprecatedGetShorthandRouteHandler extends _routeHandlersShorthandsGet {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'GetShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/get' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsGet } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
