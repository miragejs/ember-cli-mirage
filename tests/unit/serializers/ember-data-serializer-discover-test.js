import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { createServer } from 'miragejs';
import { applyEmberDataSerializers} from 'ember-cli-mirage';

module('Unit | Serializer | ember data serializer discover', function(hooks) {
  setupTest(hooks);

  let server;

  hooks.beforeEach(function() {
    server = createServer({
      serializers: applyEmberDataSerializers({})
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
