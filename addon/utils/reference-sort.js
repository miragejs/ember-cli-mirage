import { _utilsReferenceSort } from 'miragejs';
import { deprecateNestedImport } from '../deprecate-imports';

/**
 @function referenceSort
 @hide
 */
export default function referenceSort(...args) {
  const message =
    `Importing 'referenceSort' from 'ember-cli-mirage/utils/reference-sort' is deprecated. ` +
    `This wasn't intended to be a public API. If you absolute know what you are doing, ` +
    `install the \`miragejs\` package and use \`import { _utilsReferenceSort } from 'miragejs';\` instead.`;

  deprecateNestedImport(message);

  return _utilsReferenceSort(...args);
}
