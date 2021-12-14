import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { createServer } from 'miragejs';
import { applyEmberDataSerializers } from 'ember-cli-mirage';

module('Unit | Serializer | ember data serializer discover', function (hooks) {
  setupTest(hooks);

  let server;

  hooks.beforeEach(function () {
    server = createServer({
      serializers: applyEmberDataSerializers({}),
    });
  });

  hooks.afterEach(function () {
    server.shutdown();
  });

  test('it discovers the serializers', function (assert) {
    let serializer = server.serializerOrRegistry.serializerFor('address');

    assert.strictEqual(serializer.primaryKey, 'addressId');

    serializer = server.serializerOrRegistry.serializerFor('word-smith');
    assert.strictEqual(serializer.transforms['blogPosts'].serialize, 'records');
  });
});
