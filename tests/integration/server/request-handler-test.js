import {module, test} from 'qunit';
import { Model, JSONAPISerializer } from 'ember-cli-mirage';
import Server from 'ember-cli-mirage/server';

module('Integration | Server | Request handler test', function(hooks) {
  hooks.beforeEach(function() {
    this.server = new Server({
      environment: 'test',
      models: {
        user: Model
      },
      serializers: {
        application: JSONAPISerializer
      },
      baseConfig() {
        this.get('/users');
        this.get('/users/:id');
      }
    });
  });

  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('it works for static URLS', async function(assert) {
    assert.expect(1);

    this.server.create('user', { name: 'Link' });

    let response = await this.server.requestHandler.handle('GET', '/users');

    assert.deepEqual(response.data, {
      data: [
        {
          type: 'users',
          id: '1',
          attributes: {
            name: 'Link'
          }
        }
      ]
    });
  });

  test('it works for dynamic URLS', async function(assert) {
    assert.expect(1);

    let user = this.server.create('user', { name: 'Link' });

    let response = await this.server.requestHandler.handle('GET', `/users/${user.id}`);

    assert.deepEqual(response.data, {
      data: [
        {
          type: 'users',
          id: '1',
          attributes: {
            name: 'Link'
          }
        }
      ]
    });
  });

  test('it returns undefined for unrecognized URLS', async function(assert) {
    assert.expect(1);

    let response = await this.server.requestHandler.handle('GET', '/foo');

    assert.equal(response, undefined);
  });
});
