import { _routeHandlersShorthandsPut } from 'miragejs';
import { deprecateNestedImport } from '../../deprecate-imports';

/**
 @class DeprecatedPutShorthandRouteHandler
 @hide
 */
export default class DeprecatedPutShorthandRouteHandler extends _routeHandlersShorthandsPut {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'PutShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/put' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsPut } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
