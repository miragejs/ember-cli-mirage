import { module, test } from "qunit";
import { visit, currentRouteName, findAll, fillIn, click } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";

module('Acceptance | Crud demo', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks)

  test('I can view the users', async function(assert) {
    this.server.createList('user', 3);

    await visit('/crud-demo');

    assert.equal(findAll('[data-test-id="user"]').length, 3);
  });

  test('I can create a new user', async function(assert) {
    this.server.create('user', 1);

    await visit('/crud-demo');
    await fillIn('input', 'Ganon');
    await click('[data-test-id="create-user"]');

    assert.equal(findAll('[data-test-id="user"]').length, 2);
    assert.ok(this.server.db.users.length, 2);
  });

  test('I can update a user', async function(assert) {
    let user = this.server.create('user', { name: 'Yehuda' });

    await visit('/crud-demo');
    await fillIn('[data-test-id="user"] input', 'Katz');
    await click('[data-test-id="update-user"]');

    user.reload();

    assert.dom('[data-test-id="user"] input').hasValue('Katz');
    assert.ok(user.name, 'Katz');
  });

  test('I can delete a user', async function(assert) {
    this.server.create('user', { name: 'Yehuda' });

    await visit('/crud-demo');
    await click('[data-test-id="delete-user"]');

    assert.equal(findAll('[data-test-id="user"]').length, 0);
    assert.equal(this.server.db.users.length, 0);
  });

  test('If the server errors on GET /users, the error template shows', async function(assert) {
    this.server.get('/users', {
      errors: [ 'improper auth' ]
    }, 404);

    await visit('/crud-demo');

    assert.dom('[data-test-id="error"]').hasText('improper auth');
    assert.equal(currentRouteName(), 'crud-demo_error');
  });
});
