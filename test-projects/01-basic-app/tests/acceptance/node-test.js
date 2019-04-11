import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | Mirage in Node test', function(hooks) {
  setupApplicationTest(hooks);

  test('it works', async function(assert) {
    await visit('/mirage-node');

    assert.dom().includesText('hello-node');
  });
});
