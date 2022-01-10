import { _routeHandlersShorthandsDelete } from 'miragejs';
import { deprecateNestedImport } from '../../deprecate-imports';

/**
 @class DeprecatedDeleteShorthandRouteHandler
 @hide
 */
export default class DeprecatedDeleteShorthandRouteHandler extends _routeHandlersShorthandsDelete {
  constructor(...args) {
    deprecateNestedImport(
      `Importing 'DeleteShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/delete' is deprecated. ` +
        `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
        `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsDelete } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
