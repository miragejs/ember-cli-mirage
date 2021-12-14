import { _utilsIsAssociation } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @function isAssociation
 @hide
 */
export default function isAssociation(...args) {
  const message =
    `Importing 'isAssociation' from 'ember-cli-mirage/utils/is-association' is deprecated. ` +
    `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
    `install the \`miragejs\` package and use \`import { _utilsIsAssociation } from 'miragejs';\` instead.`;

  deprecateNestedImport(message);

  return _utilsIsAssociation(...args);
}
