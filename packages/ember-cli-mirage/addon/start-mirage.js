import readModules from './utils/read-modules';
import { singularize, pluralize } from 'ember-inflector';
import { assert } from '@ember/debug';

/**
  Helper to start mirage. This should not be called directly. In rfc232/rfc268
  tests, use `setupMirage()` or the `autoboot` option in the addon config
  in the environment.

  @hide
*/
export default function startMirage(owner, { env, makeServer } = {}) {
  if (!env || !makeServer) {
    if (!owner) {
      throw new Error('You must pass `owner` to startMirage()');
    }

    env = env || owner.resolveRegistration('config:environment');

    // These are set from `<app>/initializers/ember-cli-mirage`
    makeServer = makeServer || owner.resolveRegistration('mirage:make-server');
  }

  let environment = env.environment;

  let modules = readModules(env.modulePrefix);

  let options = Object.assign(modules, {
    environment,
    store: owner.lookup('service:store'),
  });

  options.inflector = { singularize, pluralize };

  // MakeServer must accept at least one param
  assert(
    'There is no makeServer function passed or registered as mirage:make-server',
    makeServer,
  );
  assert(
    'Mirage config default exported function must at least one parameter',
    makeServer.length > 0,
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
