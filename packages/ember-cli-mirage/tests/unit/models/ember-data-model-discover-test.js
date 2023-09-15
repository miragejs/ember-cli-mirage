import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { createServer } from 'miragejs';
import { discoverEmberDataModels } from 'ember-cli-mirage';

module('Unit | Model | ember data model discover', function (hooks) {
  setupTest(hooks);

  let server;

  hooks.beforeEach(function () {
    server = createServer({
      models: discoverEmberDataModels({}),
    });
  });

  hooks.afterEach(function () {
    server.shutdown();
  });

  test('it discovers the models', function (assert) {
    assert.ok(server.schema.modelFor('address'));
    assert.ok(server.schema.modelFor('comment'));
    assert.ok(server.schema.modelFor('post'));
    assert.ok(server.schema.modelFor('user'));
    assert.ok(server.schema.modelFor('wordSmith'));
  });
});
