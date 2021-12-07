import { Model } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

export default class DeprecatedModel extends Model {
  constructor (...args) {
    deprecateNestedImport(
      `Importing 'Model' from 'ember-cli-mirage/orm/model' is deprecated. ` +
      `Install the \`miragejs\` package and use \`import { Model } from 'miragejs';\` instead.`
    );

    super(...args);
  }
}
