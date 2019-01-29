import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | module count', function(hooks) {
  setupApplicationTest(hooks);

  test('only 1 module (the no-op initializer) should be included', async function(assert) {
    await visit('/');

    assert.dom('[data-test-id="mirage-module-count"]').hasText('0');
    assert.dom('[data-test-id="other-module-count"]').hasText('1');
  });
});
