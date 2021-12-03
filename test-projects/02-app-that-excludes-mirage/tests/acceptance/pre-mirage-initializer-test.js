import { module, test } from "qunit";
import { visit } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module('Acceptance | noop initializer test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /noop-initializer-test', async function (assert) {
    await visit('/');

    assert.dom('[data-test-id="wifi-connected"]').exists({ count: 1 });
  });
});
