import Serializer from 'ember-cli-mirage/serializer';
import SerializerRegistry from 'ember-cli-mirage/serializer-registry';
import Collection from 'ember-cli-mirage/orm/collection';
import schemaHelper from '../../schema-helper';
import { module, test } from 'qunit';

module('Integration | Serializers | Base | Associations | Many To Many', {
  beforeEach() {
    this.schema = schemaHelper.setup();

    let mario = this.schema.contacts.create({ name: 'Mario' });
    let newYork = this.schema.addresses.create({ street: 'Some New York Street' });
    let mushroomKingdom = this.schema.addresses.create({ street: 'Some Mushroom Kingdom Street' });

    this.schema.contactAddresses.create({ contact: mario, address: newYork });
    this.schema.contactAddresses.create({ contact: mario, address: mushroomKingdom });

    this.BaseSerializer = Serializer;
  },

  afterEach() {
    this.schema.db.emptyData();
  }
});

test(`it serializes manyToMany if properly configured to passthrough`, function(assert) {
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

  assert.deepEqual(result, {
    addresses: [{
      contactId: null, // side-effect of having a HasMany on the contactAddress side of things
      contactIds: ['1'],
      id: '1',
      street: 'Some New York Street'
    }, {
      contactId: null,
      contactIds: ['1'],
      id: '2',
      street: 'Some Mushroom Kingdom Street'
    }],
    contact: {
      addressId: null, // side-effect of having a HasMany on the contactAddress side of things
      addressIds: ['1', '2'],
      id: '1',
      name: 'Mario'
    }
  });
});
