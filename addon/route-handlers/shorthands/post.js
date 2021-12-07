import { _routeHandlersShorthandsPost } from 'miragejs';
import { deprecateNestedImport } from '../../deprecate-imports';

export default class DeprecatedHeadShorthandRouteHandler extends _routeHandlersShorthandsPost {
  constructor (...args) {
    deprecateNestedImport(
      `Importing 'PostShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/post' is deprecated. ` +
      `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
      `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsPost } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
