import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home', function (hooks) {
  setupApplicationTest(hooks);

  test('the homepage renders without error', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/', 'Correct URL is shown');
  });
});
