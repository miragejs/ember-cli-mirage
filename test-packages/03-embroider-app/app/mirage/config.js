import {
  discoverEmberDataModels,
  applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';
import ENV from 'embroider-app/config/environment';

export default function (config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(ENV), ...config.models },
    serializers: applyEmberDataSerializers(config.serializers, ENV),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.resource('user');
}
