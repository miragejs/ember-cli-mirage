import { macroCondition, dependencySatisfies, importSync } from '@embroider/macros';


/**
  Helper to get our rfc232/rfc268 test context object, or null if we're not in
  such a test.

  @hide
*/
export default function getRfc232TestContext() {
  // Support older versions of `ember-qunit` that don't have
  // `@ember/test-helpers` (and therefore cannot possibly be running an
  // rfc232/rfc268 test).
  if (macroCondition(dependencySatisfies('@ember/test-helpers', '*'))) {
    let { getContext } = importSync('@ember/test-helpers');

    return getContext();
  }
}
