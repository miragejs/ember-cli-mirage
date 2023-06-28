import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | Identity manager', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('custom identity managers work', function (assert) {
    let book = this.server.create('book');

    assert.strictEqual(book.id, 'a');
  });
});
