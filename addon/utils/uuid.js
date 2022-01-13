import { _utilsUuid } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @function uuid
 @hide
 */
export default function uuid(...args) {
  const message =
    `Importing 'uuid' from 'ember-cli-mirage/utils/uuid' is deprecated. ` +
    `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
    `install the \`miragejs\` package and use \`import { _utilsUuid } from 'miragejs';\` instead.`;

  deprecateNestedImport(message);

  return _utilsUuid(...args);
}
