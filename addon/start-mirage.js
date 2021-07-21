import readModules from './utils/read-modules';
import Server from './server';
import { singularize, pluralize } from 'ember-inflector';

/**
  Helper to start mirage. This should not be called directly. In rfc232/rfc268
  tests, use `setupMirage()` or the `autoboot` option in the addon config
  in the environment. In legacy tests that call `startMirage` directly, this
  should be called via the `startMirage` method exported from
  `<app>/initializers/ember-cli-mirage`.

  This is intended to be called with only the `owner` argument (which would be
  `this.owner` in an rfc232/rfc268 test, or the application instance if called
  from an instance initializer). However, to support the legacy initializer, it
  can instead accept a hash of the environment and config objects.

  @hide
*/
export default function startMirage(owner, { env, baseConfig, testConfig, makeServer } = {}) {
  if (!env || (!baseConfig && !makeServer)) {
    if (!owner) {
      throw new Error('You must pass `owner` to startMirage()');
    }

    env = env || resolveRegistration(owner, 'config:environment');
    // These are set from `<app>/initializers/ember-cli-mirage`
    baseConfig = baseConfig || resolveRegistration(owner, 'mirage:base-config');
    testConfig = testConfig || resolveRegistration(owner, 'mirage:test-config');
    makeServer = makeServer || resolveRegistration(owner, 'mirage:make-server');
  }

  let environment = env.environment;
  let mirageEnvironment = env['ember-cli-mirage'] || {};
  let discoverEmberDataModels = mirageEnvironment.discoverEmberDataModels;
  if (discoverEmberDataModels === undefined) { discoverEmberDataModels = true; }
  let modules = readModules(env.modulePrefix);
  let options = Object.assign(modules, {environment, routes: baseConfig, testConfig, discoverEmberDataModels});
  options.trackRequests = mirageEnvironment.trackRequests;
  options.inflector = { singularize, pluralize };

  let server;
  if (makeServer) {
    server = makeServer(options);
    if (typeof location !== 'undefined' && location.search.indexOf('mirageLogging') !== -1) {
      server.logging = true;
    }
  } else {
    server = new Server(options);
  }

  return server;
}

// Support Ember 1.13
function resolveRegistration(owner, ...args) {
  if (owner.resolveRegistration) {
    return owner.resolveRegistration(...args);
  } else if (owner.__container__) {
    return owner.__container__.lookupFactory(...args);
  } else {
    return owner.container.lookupFactory(...args);
  }
}
