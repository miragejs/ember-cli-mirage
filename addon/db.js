import { _Db } from 'miragejs';
import { deprecateNestedImport } from './deprecate-imports';

export default class DeprecatedBaseRouteHandler extends _Db {
  constructor (...args) {
    deprecateNestedImport(
      `Importing 'Db' from 'ember-cli-mirage/db' is deprecated. ` +
      `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
      `install the \`miragejs\` package and use \`import { _Db } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
