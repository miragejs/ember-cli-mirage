import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Server from 'ember-cli-mirage/server';

module('Unit | Serializer | ember data serializer discover', function(hooks) {
  setupTest(hooks);

  let server;

  hooks.beforeEach(function() {
    server = new Server({
      environment: "test",
      discoverEmberDataModels: true,
      discoverEmberDataSerializers: true
    });
  });

  hooks.afterEach(function () {
    server.shutdown();
  });

  test('it discovers the serializers', function(assert) {
    let serializer = server.serializerOrRegistry.serializerFor('address');

    assert.ok(serializer.primaryKey === 'addressId');

    serializer = server.serializerOrRegistry.serializerFor('word-smith');
    assert.ok(serializer.transforms['blogPosts'].serialize === 'records');
  });

});
