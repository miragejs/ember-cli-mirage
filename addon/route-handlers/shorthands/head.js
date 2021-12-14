import { _routeHandlersShorthandsHead } from 'miragejs';
import { deprecateNestedImport } from '../../deprecate-imports';

/**
 @class DeprecatedHeadShorthandRouteHandler
 @hide
 */
export default class DeprecatedHeadShorthandRouteHandler extends _routeHandlersShorthandsHead {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'HeadShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/head' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsHead } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
