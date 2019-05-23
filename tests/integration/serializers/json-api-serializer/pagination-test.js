import Server from 'ember-cli-mirage/server';
import { module, test } from 'qunit';
import { Model, JSONAPISerializer } from 'ember-cli-mirage';

let server;

module('Integration | Serializers | JSON API Serializer | Pagination', function(hooks) {

  hooks.beforeEach(function() {
    server = new Server({
      models: {
        watch: Model.extend()
      },
      serializers: {
        application: JSONAPISerializer
      }
    });

    server.schema.watches.create({ make: 'Citizen' });
    server.schema.watches.create({ make: 'Hamilton' });
    server.schema.watches.create({ make: 'Rolex' });
    server.schema.watches.create({ make: 'Apple' });
  });

  hooks.afterEach(function() {
    server.shutdown();
  });

  test('📓 it paginates the data based on pagination query params', function(assert) {
    let collection = server.schema.watches.all();

    let json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'page[number]': 1, 'page[size]': 2 } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '1',
          attributes: {
            make: 'Citizen'
          }
        },
        {
          type: 'watches',
          id: '2',
          attributes: {
            make: 'Hamilton'
          }
        }
      ]
    });

    json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'page[number]': 2, 'page[size]': 2 } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '3',
          attributes: {
            make: 'Rolex'
          }
        },
        {
          type: 'watches',
          id: '4',
          attributes: {
            make: 'Apple'
          }
        }
      ]
    });
  });

  test('📓 it defaults to the first page when only the size is provided', function(assert) {
    let collection = server.schema.watches.all();

    let json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'page[size]': 3 } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '1',
          attributes: {
            make: 'Citizen'
          }
        },
        {
          type: 'watches',
          id: '2',
          attributes: {
            make: 'Hamilton'
          }
        },
        {
          type: 'watches',
          id: '3',
          attributes: {
            make: 'Rolex'
          }
        }
      ]
    });
  });

  test('📓 it returns every record when no size is provided', function(assert) {
    let collection = server.schema.watches.all();

    let json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'page[number]': 3 } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '1',
          attributes: {
            make: 'Citizen'
          }
        },
        {
          type: 'watches',
          id: '2',
          attributes: {
            make: 'Hamilton'
          }
        },
        {
          type: 'watches',
          id: '3',
          attributes: {
            make: 'Rolex'
          }
        },
        {
          type: 'watches',
          id: '4',
          attributes: {
            make: 'Apple'
          }
        }
      ]
    });
  });

});
