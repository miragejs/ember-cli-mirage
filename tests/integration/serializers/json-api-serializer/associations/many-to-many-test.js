import JsonApiSerializer from 'ember-cli-mirage/serializers/json-api-serializer';
import SerializerRegistry from 'ember-cli-mirage/serializer-registry';
import Collection from 'ember-cli-mirage/orm/collection';
import schemaHelper from '../../schema-helper';
import { module, test } from 'qunit';

module('Integration | Serializers | JSON API Serializer | Associations | Many To Many', {
  beforeEach() {
    this.schema = schemaHelper.setup();

    let mario = this.schema.contacts.create({ name: 'Mario' });
    let newYork = this.schema.addresses.create({ street: 'Some New York Street' });
    let mushroomKingdom = this.schema.addresses.create({ street: 'Some Mushroom Kingdom Street' });

    this.schema.contactAddresses.create({ contact: mario, address: newYork });
    this.schema.contactAddresses.create({ contact: mario, address: mushroomKingdom });

    this.BaseSerializer = JsonApiSerializer;
  },

  afterEach() {
    this.schema.db.emptyData();
  }
});

test(`it serializes manyToMany if properly configured to passthrough `, function(assert) {
  let registry = new SerializerRegistry(this.schema, {
    application: this.BaseSerializer,
    contact: this.BaseSerializer.extend({
      addresses(model) {
        let models = model.contactAddresses.models.map(ca => ca.address);
        return new Collection('address', models);
      }
    }),
    address: this.BaseSerializer.extend({
      contacts(model) {
        let models = model.contactAddresses.models.map(ca => ca.contact);
        return new Collection('contact', models);
      }
    })
  });

  let link = this.schema.contacts.find(1);
  let result = registry.serialize(link);

  assert.deepEqual(result, {
    data: {
      id: '1',
      type: 'contacts',
      attributes: {
        name: 'Mario'
      },
      relationships: {
        addresses: {
          data: [
            { id: '1', type: 'addresses' },
            { id: '2', type: 'addresses' }
          ]
        },
        'contact-addresses': {
          data: [
            { id: '1', type: 'contact-addresses' },
            { id: '2', type: 'contact-addresses' }
          ]
        }
      }
    }
  });
});

test(`it sideloads manyToMany if properly configured to passthrough and include`, function(assert) {
  let registry = new SerializerRegistry(this.schema, {
    application: this.BaseSerializer,
    contact: this.BaseSerializer.extend({
      include: ['addresses'],
      addresses(model) {
        let models = model.contactAddresses.models.map(ca => ca.address);
        return new Collection('address', models);
      }
    }),
    address: this.BaseSerializer.extend({
      include: ['contacts'],
      contacts(model) {
        let models = model.contactAddresses.models.map(ca => ca.contact);
        return new Collection('contact', models);
      }
    })
  });

  let link = this.schema.contacts.find(1);
  let result = registry.serialize(link);

  let { data, included } = result;

  assert.deepEqual(data, {
    id: '1',
    type: 'contacts',
    attributes: {
      name: 'Mario'
    },
    relationships: {
      addresses: {
        data: [
          { id: '1', type: 'addresses' },
          { id: '2', type: 'addresses' }
        ]
      },
      'contact-addresses': {
        data: [
          { id: '1', type: 'contact-addresses' },
          { id: '2', type: 'contact-addresses' }
        ]
      }
    }
  });

  assert.deepEqual(included, [{
    id: '1',
    type: 'addresses',
    attributes: {
      street: 'Some New York Street'
    },
    relationships: {
      contacts: { data: [{ id: '1', type: 'contacts' }] },
      'contact-addresses': { data: [{ id: '1', type: 'contact-addresses' }] }
    }
  }, {
    id: '2',
    type: 'addresses',
    attributes: {
      street: 'Some Mushroom Kingdom Street'
    },
    relationships: {
      contacts: { data: [{ id: '1', type: 'contacts' }] },
      'contact-addresses': { data: [{ id: '2', type: 'contact-addresses' }] }
    }
  }]);
});
