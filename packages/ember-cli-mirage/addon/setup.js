import { macroCondition, getOwnConfig } from '@embroider/macros';
import { assert } from '@ember/debug';
import startMirageImpl from './start-mirage';

/**
 * In an initializer
 * ```js
 * import makeServer from '<app-name>/mirage/config';
 * import appConfig from '<app-name>/config/environment';
 * import { setupMirage } from 'ember-cli-mirage';
 *
 * export default {
 *   name: 'setup-mirage',
 *   initialize(application) {
 *     setupMirage(config, makeServer, application);
 *   },
 * };
 * ```
 *
 * When calling setupMirage in your app, you may, at build time,
 * disable mirage, by setting:
 * ```js
 * // ember-cli-build.js
 * '@embroider/macros': {
 *   setConfig: {
 *     'ember-cli-mirage': {
 *       enabled: environment === 'development' // only enable while in development, default: false
 *       usingProxy: false, // default false
 *     }
 *   }
 * }
 * ```
 */
export function setupMirage(appConfig, makeServer, appInstance) {
  // The consumers minification / terser should remove this
  // and then consequently remove all the unused functions as a result
  if (macroCondition(!getOwnConfig()?.enabled)) {
    return;
  }

  if (_shouldUseMirage(appConfig.environment)) {
    assert(
      `default export function is missing on the passed mirageConfig`,
      makeServer
    );

    appInstance.register('mirage:make-server', makeServer, {
      instantiate: false,
    });

    return startMirageImpl(null, {
      env: appConfig,
      makeServer,
    });
  }
}

function _shouldUseMirage(env) {
  if (typeof FastBoot !== 'undefined') {
    return false;
  }

  let usingProxy = getOwnConfig()?.usingProxy;
  let usingInDev = env === 'development' && !usingProxy;
  let usingInTest = env === 'test';

  return usingInDev || usingInTest;
}
