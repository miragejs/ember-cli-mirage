import MirageServer from '@miragejs/server/lib';
export * from '@miragejs/server/lib';

import Inflector from 'ember-inflector';
import { __inflections } from './utils/inflector';

function patchEmberInflector() {
  __inflections(newInflector => {
    // Proxy ember-inflector calls to `inflected`
    Inflector.inflector = new window.Proxy(Inflector.inflector, {
      get: function(target, prop) {
        if (!newInflector[prop]) {
          return target[prop].apply(this, arguments);
        }

        return (...args) => newInflector[prop](...args);
      }
    });
  });
}

patchEmberInflector();

export default MirageServer;
