import Server from 'ember-cli-mirage/server';
import { module, test } from 'qunit';
import { Model, JSONAPISerializer, belongsTo, hasMany } from 'ember-cli-mirage';

let server;

module('Integration | Serializers | JSON API Serializer | Filtering', function(hooks) {

  hooks.beforeEach(function() {
    server = new Server({
      models: {
        person: Model.extend({
          watches: hasMany('watch', { inverse: 'owner' })
        }),
        watch: Model.extend({
          owner: belongsTo('person', { inverse: 'watches' })
        })
      },
      serializers: {
        application: JSONAPISerializer
      }
    });
  });

  hooks.afterEach(function() {
    server.shutdown();
  });

  test('🔎 it filters the data based on the filter param', function(assert) {
    server.schema.watches.create({ make: 'Citizen' });
    server.schema.watches.create({ make: 'Hamilton' });
    server.schema.watches.create({ make: 'Rolex' });
    server.schema.watches.create({ make: 'Apple' });

    let collection = server.schema.watches.all();

    let json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'filter[id]': 1 } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '1',
          attributes: {
            make: 'Citizen'
          }
        }
      ]
    });

    json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'filter[make]': 'Rolex' } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '3',
          attributes: {
            make: 'Rolex'
          }
        }
      ]
    });

    json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'filter[id]': 42 } });

    assert.deepEqual(json, { data: [] });

    json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'filter[make]': 'Jaeger Lecoultre' } });

    assert.deepEqual(json, { data: [] });
  });

  test('🔎 it enforces type matching for attributes that are not `id`', function(assert) {
    server.schema.watches.create({ automatic: false, make: 'Citizen' });
    server.schema.watches.create({ automatic: true, make: 'Hamilton' });

    let collection = server.schema.watches.all();

    let json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'filter[id]': 1 } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '1',
          attributes: {
            automatic: false,
            make: 'Citizen'
          }
        }
      ]
    });

    json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'filter[id]': '1' } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '1',
          attributes: {
            automatic: false,
            make: 'Citizen'
          }
        }
      ]
    });

    json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'filter[automatic]': true } });

    assert.deepEqual(json, {
      data: [
        {
          type: 'watches',
          id: '2',
          attributes: {
            automatic: true,
            make: 'Hamilton'
          }
        }
      ]
    });
    json = server.serializerOrRegistry.serialize(collection, { queryParams: { 'filter[automatic]': 'true' } });

    assert.deepEqual(json, { data: [] });
  });

  test('🔎 it filters the data based on multiple filter params', function(assert) {
    server.schema.watches.create({ automatic: true, complications: 2, make: 'Hamilton', model: 'Khaki Aviation', size: 46 });
    server.schema.watches.create({ automatic: true, complications: 2, make: 'Hamilton', model: 'Jazzmaster', size: 42 });
    server.schema.watches.create({ automatic: true, complications: 1, make: 'Hamilton', model: 'Khaki Field', size: 38 });
    server.schema.watches.create({ automatic: true, complications: 3, make: 'Hamilton', model: 'Khaki Aviation', size: 44 });

    let collection = server.schema.watches.all();

    let json = server.serializerOrRegistry.serialize(collection, {
      queryParams: {
        'filter[automatic]': true,
        'filter[make]': 'Hamilton',
        'filter[size]': 38
      }
    });

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
        }
      ]
    });

    json = server.serializerOrRegistry.serialize(collection, {
      queryParams: {
        'filter[complications]': 2,
        'filter[make]': 'Hamilton'
      }
    });

    assert.deepEqual(json, {
      data: [
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
        }
      ]
    });

    json = server.serializerOrRegistry.serialize(collection, {
      queryParams: {
        'filter[complications]': 2,
        'filter[make]': 'Jaeger Lecoultre'
      }
    });

    assert.deepEqual(json, { data: [] });
  });

});
