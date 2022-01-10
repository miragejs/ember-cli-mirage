import { _utilsExtend } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @function extend
 @hide
 */
export default function extend(...args) {
  const message =
    `Importing 'extend' from 'ember-cli-mirage/utils/extend' is deprecated. ` +
    `This wasn't intended to be a public API and you should use Factory.extend, Model.extend, ` +
    `etc. APIs described in https://miragejs.com/. If you absolute know what you are doing, ` +
    `install the \`miragejs\` package and use \`import { _utilsExtend } from 'miragejs';\` instead.`;

  deprecateNestedImport(message);

  return _utilsExtend(...args);
}
