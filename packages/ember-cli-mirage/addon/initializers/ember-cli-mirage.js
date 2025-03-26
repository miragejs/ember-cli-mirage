import getRfc232TestContext from 'ember-cli-mirage/get-rfc232-test-context';
import startMirageImpl from 'ember-cli-mirage/start-mirage';
import * as config from '../mirage/config';
const { default: makeServer } = config;

//
// This initializer does two things:
//
// 1. Pulls the mirage config objects from the application's config and
//    registers them in the container so `ember-cli-mirage/start-mirage` can
//    find them (since it doesn't have access to the app's namespace).
// 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
//    tests.
//
export function initialize(application) {
  if (makeServer) {
    application.register('mirage:make-server', makeServer, {
      instantiate: false,
    });
  }

  const ENV = application.resolveRegistration('config:environment');

  ENV['ember-cli-mirage'] = ENV['ember-cli-mirage'] || {};
  if (_shouldUseMirage(ENV.environment, ENV['ember-cli-mirage'])) {
    startMirage(application.__container__, ENV);
  }
}

export default {
  name: 'ember-cli-mirage',
  initialize,
};

function startMirage(owner, env) {
  return startMirageImpl(owner, { env, makeServer });
}

function _shouldUseMirage(env, addonConfig) {
  if (typeof FastBoot !== 'undefined') {
    return false;
  }
  if (getRfc232TestContext()) {
    return false;
  }
  let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
  let defaultEnabled = _defaultEnabled(env, addonConfig);

  return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
}

/*
  Returns a boolean specifying the default behavior for whether
  to initialize Mirage.
*/
function _defaultEnabled(env, addonConfig) {
  let usingInDev = env === 'development' && !addonConfig.usingProxy;
  let usingInTest = env === 'test';

  return usingInDev || usingInTest;
}
