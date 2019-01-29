import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | User-supplied Pretender', function(hooks) {
  setupApplicationTest(hooks);

  test(`a local user's pretender version works`, async function(assert) {
    await visit('/');

    assert.dom('body', document.querySelector('html')).hasAttribute('data-userland-pretender');
  });
});
