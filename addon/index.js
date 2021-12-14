export { default } from 'miragejs';
export {
  discoverEmberDataModels,
  applyEmberDataSerializers,
} from './ember-data';
export { default as EmberDataSerializer } from 'ember-cli-mirage/serializers/ember-data-serializer';

import { initDeprecatedImports } from './deprecate-imports';
initDeprecatedImports();
