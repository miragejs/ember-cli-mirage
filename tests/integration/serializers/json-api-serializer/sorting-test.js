import Server from 'ember-cli-mirage/server';
import { module, test } from 'qunit';
import { Model, JSONAPISerializer } from 'ember-cli-mirage';

let server;

module('Integration | Serializers | JSON API Serializer | Sorting', function(hooks) {

  hooks.beforeEach(function() {
    server = new Server({
      models: {
        watch: Model.extend()
      },
      serializers: {
        application: JSONAPISerializer
      }
    });
  });

  hooks.afterEach(function() {
    server.shutdown();
  });

  test('☝️ it paginates the data based on the pagination query params', function(assert) {
    server.schema.watches.create({ make: 'Citizen' });
    server.schema.watches.create({ make: 'Hamilton' });
    server.schema.watches.create({ make: 'Rolex' });
    server.schema.watches.create({ make: 'Apple' });

    let collection = server.schema.watches.all();

    let json = server.serializerOrRegistry.serialize(collection, { queryParams: { sort: 'make' } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '4',
          attributes: {
            make: 'Apple'
          }
        },
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

  test('👇 it paginates the data based on the pagination query params', function(assert) {
    server.schema.watches.create({ make: 'Citizen' });
    server.schema.watches.create({ make: 'Hamilton' });
    server.schema.watches.create({ make: 'Rolex' });
    server.schema.watches.create({ make: 'Apple' });

    let collection = server.schema.watches.all();

    let json = server.serializerOrRegistry.serialize(collection, { queryParams: { sort: '-make' } });

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
          id: '2',
          attributes: {
            make: 'Hamilton'
          }
        },
        {
          type: 'watches',
          id: '1',
          attributes: {
            make: 'Citizen'
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

  test('🚀 it paginates the data based on multiple pagination query params', function(assert) {
    server.schema.watches.create({ automatic: true, complications: 2, make: 'Hamilton', model: 'Khaki Aviation', size: 46 });
    server.schema.watches.create({ automatic: true, complications: 2, make: 'Hamilton', model: 'Jazzmaster', size: 42 });
    server.schema.watches.create({ automatic: true, complications: 1, make: 'Hamilton', model: 'Khaki Field', size: 38 });
    server.schema.watches.create({ automatic: true, complications: 3, make: 'Hamilton', model: 'Khaki Aviation', size: 44 });

    let collection = server.schema.watches.all();

    let json = server.serializerOrRegistry.serialize(collection, { queryParams: { sort: 'complications,-model' } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '3',
          attributes: {
            automatic: true,
            complications: 1,
            make: 'Hamilton',
            model: 'Khaki Field',
            size: 38
          }
        },
        {
          type: 'watches',
          id: '1',
          attributes: {
            automatic: true,
            complications: 2,
            make: 'Hamilton',
            model: 'Khaki Aviation',
            size: 46
          }
        },
        {
          type: 'watches',
          id: '2',
          attributes: {
            automatic: true,
            complications: 2,
            make: 'Hamilton',
            model: 'Jazzmaster',
            size: 42
          }
        },
        {
          type: 'watches',
          id: '4',
          attributes: {
            automatic: true,
            complications: 3,
            make: 'Hamilton',
            model: 'Khaki Aviation',
            size: 44
          }
        }
      ]
    });
  });
});
