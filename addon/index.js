import MirageServer from '@miragejs/server/lib';
export * from '@miragejs/server/lib';

import Inflector from 'ember-inflector';
import { __inflections } from './utils/inflector';

function patchEmberInflector() {
  __inflections(inflector => {
    // Proxy ember-inflector calls to `inflected`
    Inflector.inflector = new window.Proxy(Inflector.inflector, {
      get: function(_, prop) {
        if (inflector[prop]) {
          return function(...args) {
            return inflector[prop](...args);
          };
        }

        return window.Reflect.get(...arguments);
      }
    });
  });
}

patchEmberInflector();

export default MirageServer;
