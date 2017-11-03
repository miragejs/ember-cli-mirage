import { module, test } from 'qunit';
import { Model, ActiveModelSerializer } from 'ember-cli-mirage';
import Server from 'ember-cli-mirage/server';

module('Integration | Server | Namespaced Models', function(hooks) {
  hooks.beforeEach(function() {
    this.server = new Server({
      environment: 'test',
      models: {
        ['namespaced/user']: Model
      },
      serializers: {
        application: ActiveModelSerializer
      }
    });

    this.server.timing = 0;
    this.server.logging = false;
  });

  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('Namespaced models work', function(assert) {
    assert.expect(2);
    let done = assert.async();

    this.server.db.loadData({
      'namespaced/users': [{ id: 1, name: 'Potato' }]
    });

    this.server.get('/namespaced/users');

    $.ajax({
      method: 'GET',
      url: '/namespaced/users'
    }).done(function(res, status, xhr) {
      assert.equal(xhr.status, 200);
      assert.deepEqual(res, {
        'namespaced/users': [{ id: '1', name: 'Potato' }]
      });
      done();
    });
  });
});
