import { createServer, discoverEmberDataModels } from 'ember-cli-mirage';

export function makeServer(config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
  };

  return createServer(finalConfig)
}

export default function() {
  this.resource('user');
}
