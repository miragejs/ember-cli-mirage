import { registerDestructor } from '@ember/destroyable';
import getRfc232TestContext from '../get-rfc232-test-context';
import startMirage from '../start-mirage';

/**
  If we are running an rfc232/rfc268 test then we want to support the
  `autostart` configuration option, which auto-starts mirage before the test
  runs and shuts it down afterwards, and also sets `this.server` on the test
  context so the tests don't need to use the global `server`. We do this in an
  instance initializer because initializers only run once per test run, not
  before and after each test.

  @hide
*/
export function initialize(appInstance) {
  let testContext = getRfc232TestContext();
  if (testContext) {
    let { 'ember-cli-mirage': { autostart } = {} } =
      appInstance.resolveRegistration('config:environment');

    if (autostart) {
      testContext.server = startMirage(appInstance);

      // Ensure that the server is shut down when the application is destroyed.
      registerDestructor(appInstance, () => {
        testContext.server.shutdown();
        delete testContext.server;
      });
    }
  }
}

export default {
  initialize,
};
