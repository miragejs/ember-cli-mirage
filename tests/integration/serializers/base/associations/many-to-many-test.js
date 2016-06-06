import { module, test } from 'qunit';
import { Collection, Model, hasMany, belongsTo, Serializer } from 'ember-cli-mirage';
import Server from 'ember-cli-mirage/server';

module('Integration | Serializers | Base | Associations | Many To Many', {
  beforeEach() {
    let server = new Server({
      environment: 'test',
      models: {
        contact: Model.extend({
          addresses: hasMany(),
          contactAddresses: hasMany()
        }),
        address: Model.extend({
          contacts: hasMany(),
          contactAddresses: hasMany()
        }),
        contactAddress: Model.extend({
          contact: belongsTo(),
          address: belongsTo()
        })
      },
      serializers: {
        application: Serializer,
        contact: Serializer.extend({
          include: ['addresses'],
          addresses(model) {
            let models = model.contactAddresses.models.map(ca => ca.address);
            return new Collection('address', models);
          }
        }),
        address: Serializer.extend({
          include: ['contacts'],
          contacts(model) {
            let models = model.contactAddresses.models.map(ca => ca.contact);
            return new Collection('contact', models);
          }
        })
      }
    });

    server.timing = 0;
    server.logging = false;

    let { schema } = server;

    let mario = schema.contacts.create({ name: 'Mario' });
    let newYork = schema.addresses.create({ street: 'Some New York Street' });
    let mushroomKingdom = schema.addresses.create({ street: 'Some Mushroom Kingdom Street' });

    schema.contactAddresses.create({ contact: mario, address: newYork });
    schema.contactAddresses.create({ contact: mario, address: mushroomKingdom });

    this.server = server;
    this.schema = schema;
  },
  afterEach() {
    this.server.shutdown();
  }
});

test(`it serializes manyToMany if properly configured to passthrough`, function(assert) {
  let link = this.schema.contacts.find(1);
  let result = this.server.serializerOrRegistry.serialize(link);

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
