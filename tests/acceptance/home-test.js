import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { dependencySatisfies } from '@embroider/macros';

module('Acceptance | home', function (hooks) {
  setupApplicationTest(hooks);

  //  Ember Addon docs will fail for sources less then 3.16.0
  if (dependencySatisfies('ember-source', '^3.16.0')) {
    test('the homepage renders without error', async function (assert) {
      await visit('/');

      assert.strictEqual(currentURL(), '/', 'Correct URL is shown');
    });
  }
});
