import { getContext } from '@ember/test-helpers';
import { run } from '@ember/runloop';
import assert from '../assert';

let pushMirageRecordsIntoStore = function(store, server, resource, where) {
  let models = server.schema[resource].all();
  let modelName = models.modelName;
  if (typeof where === "object") {
    models = server.schema[resource].where(where);
  }

  if (models.length > 0) {
    let serializer = server.serializerOrRegistry.serializerFor(modelName);

    let originalAlwaysIncludeLinkageData = serializer.alwaysIncludeLinkageData;
    serializer.alwaysIncludeLinkageData = true;

    let json = serializer.serialize(models);

    serializer.alwaysIncludeLinkageData = originalAlwaysIncludeLinkageData;
    run(() => {
      let jsonObj = {};
      jsonObj[`${modelName}`] = json;
      store.pushPayload(jsonObj);
    });
  }

  return models;
}

/**
 * This utility pushes the mirage store into the ember store
 *
 * If you call this function passing no parameters, it will push the entire mirage store into ember store
 *
 * You may also call this utility with an array of resource names. ['accounts', 'accountTypes']. These must
 * be the resource names camelized.
 *
 * You may also call it with a hash. This hash will have the resource names as the keys and the values will either
 * be true (push all models for that resource) or a where hash that will be applied to the that resource.
 * {
 *   accounts: true,
 *   accountTypes: { state: 'OH' }
 * }
 *
 * @param config   undefined means push all resources
 *                 An array will push only the resources in the array
 *                 hash in the form of resource=value    Value may be true, all models, or a where hash
 */
let pushMirageIntoStore = function(config) {
  let context = getContext();
  let store = context.owner.lookup('service:store');

  let resources = Object.keys(context.server.schema)
    .filter(key => context.server.schema[key].all !== undefined); // Get the resources

  let where = {};

  if (config) {
    let includes;
    if (Array.isArray(config)) {
      includes = config;
    } else {
      includes = Object.keys(config);
      where = config;
    }

    resources = includes.filter(item => {
      let found = resources.includes(item);
      assert(found, `Model of type '${item}' does not exist for push mirage into store.`);
      return found;
    });
  }

  resources.forEach(resource => {
    pushMirageRecordsIntoStore(store, context.server, resource, where[resource]);
  });
}

export {
  pushMirageIntoStore,
  pushMirageRecordsIntoStore
}
