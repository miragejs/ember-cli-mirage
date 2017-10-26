import {module, test} from 'qunit';
import { Model, ActiveModelSerializer } from 'ember-cli-mirage';
import { camelize } from 'ember-cli-mirage/utils/inflector';
import Server from 'ember-cli-mirage/server';

module('Integration | Server | Customized normalize method', function(hooks) {
  hooks.beforeEach(function() {
    this.server = new Server({
      environment: 'test',
      models: {
        contact: Model
      },
      serializers: {
        application: ActiveModelSerializer,
        contact: ActiveModelSerializer.extend({
          normalize(payload) {
            let attrs = payload.some.random[1].attrs;
            Object.keys(attrs).forEach(camelize);

            let jsonApiDoc = {
              data: {
                type: 'contacts',
                attributes: attrs
              }
            };
            return jsonApiDoc;
          }
        })
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  });

  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('custom model-specific normalize functions are used', function(assert) {
    let { server } = this;
    assert.expect(3);
    let done = assert.async();

    server.post('/contacts');

    $.ajax({
      method: 'POST',
      url: '/contacts',
      data: JSON.stringify({
        some: {
          random: [
            {
              format: true
            },
            {
              attrs: {
                first_name: 'Zelda'
              }
            }
          ]
        }
      })
    }).done((res, status, xhr) => {
      assert.equal(xhr.status, 201);
      assert.equal(server.db.contacts.length, 1);
      assert.equal(server.db.contacts[0].firstName, 'Zelda');
      done();
    });
  });

  test('custom model-specific normalize functions are used with custom function handlers', function(assert) {
    let { server } = this;
    let done = assert.async();

    server.put('/contacts/:id', function(schema, request) {
      let attrs = this.normalizedRequestAttrs();

      assert.deepEqual(attrs, {
        id: '1',
        firstName: 'Zelda'
      });

      return {};
    });

    $.ajax({
      method: 'PUT',
      url: '/contacts/1',
      contentType: 'application/json',
      data: JSON.stringify({
        some: {
          random: [
            {
              format: true
            },
            {
              attrs: {
                first_name: 'Zelda'
              }
            }
          ]
        }
      })
    }).done(() => {
      done();
    });
  });
});
