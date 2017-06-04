import { Model, hasMany } from 'ember-cli-mirage';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import Serializer from 'ember-cli-mirage/serializer';
import SerializerRegistry from 'ember-cli-mirage/serializer-registry';
import { module, test } from 'qunit';

module('Integration | Serializers | Base | Associations | Polymorphic Has Many', {
  beforeEach() {
    this.schema = new Schema(new Db(), {
      user: Model.extend({
        things: hasMany({ polymorphic: true })
      }),
      picture: Model.extend()
    });

    let post = this.schema.pictures.create({ title: 'Lorem ipsum' });
    this.schema.users.create({ things: [ post ], name: 'Ned' });

    this.BaseSerializer = Serializer.extend({
      embed: false
    });
  },

  afterEach() {
    this.schema.db.emptyData();
  }
});

test(`it can serialize a polymorphic has-many relationship`, function(assert) {
  let registry = new SerializerRegistry(this.schema, {
    application: this.BaseSerializer,
    user: this.BaseSerializer.extend({
      include: ['things']
    })
  });

  let user = this.schema.users.find(1);
  let result = registry.serialize(user);

  assert.deepEqual(result, {
    user: {
      id: '1',
      name: 'Ned',
      things: [
        { id: '1', type: 'picture' }
      ]
    },
    pictures: [
      { id: '1', title: 'Lorem ipsum' }
    ]
  });
});
