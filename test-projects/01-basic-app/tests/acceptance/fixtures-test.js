import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | Fixtures', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('I can use fixtures', async function (assert) {
    this.server.loadFixtures();

    await visit('/crud-demo');

    assert.dom('[data-test-id="user"]').exists({ count: 1 });
  });

  test('I can use fixtures with the filename api', async function (assert) {
    this.server.loadFixtures('countries');

    await visit('/crud-demo');

    assert.dom('[data-test-id="user"]').doesNotExist();
  });
});
