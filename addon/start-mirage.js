import readModules from './utils/read-modules';
import { singularize, pluralize } from 'ember-inflector';
import { assert } from '@ember/debug';

/**
  Helper to start mirage. This should not be called directly. In rfc232/rfc268
  tests, use `setupMirage()` or the `autoboot` option in the addon config
  in the environment.

  @hide
*/
export default function startMirage(
  owner,
  { env, makeServer, baseConfig, testConfig } = {}
) {
  if (!env || !makeServer) {
    if (!owner) {
      throw new Error('You must pass `owner` to startMirage()');
    }

    env = env || resolveRegistration(owner, 'config:environment');

    baseConfig = baseConfig || resolveRegistration(owner, 'mirage:base-config');
    // These are set from `<app>/initializers/ember-cli-mirage`
    testConfig = testConfig || resolveRegistration(owner, 'mirage:test-config');
    makeServer = makeServer || resolveRegistration(owner, 'mirage:make-server');
  }

  // baseConfig would be a routes function

  let environment = env.environment;
  let mirageEnvironment = env['ember-cli-mirage'] || {};

  let modules = readModules(env.modulePrefix);

  let options = Object.assign(modules, {
    environment,
    baseConfig,
    testConfig,
  });
  options.trackRequests = mirageEnvironment.trackRequests;
  options.inflector = { singularize, pluralize };

  // MakeServer must accept at least one param
  assert(
    'There is no makeServer function passed or registered as mirage:make-server',
    makeServer
  );
  assert(
    'Mirage config default exported function must at least one parameter',
    makeServer.length > 0
  );

  let server = makeServer(options);
  if (
    typeof location !== 'undefined' &&
    location.search.indexOf('mirageLogging') !== -1
  ) {
    server.logging = true;
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
