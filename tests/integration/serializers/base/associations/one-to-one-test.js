import { module, test } from 'qunit';
import { Model, belongsTo, Serializer } from 'ember-cli-mirage';
import Db from 'ember-cli-mirage/db';
import Schema from 'ember-cli-mirage/orm/schema';
import SerializerRegistry from 'ember-cli-mirage/serializer-registry';

module('Integration | Serializers | Base | Associations | One to One', function(hooks) {
  hooks.beforeEach(function() {
    this.db = new Db();

    this.schema = new Schema(this.db, {
      user: Model.extend({
        profile: belongsTo()
      }),
      profile: Model.extend({
        user: belongsTo()
      })
    });

    this.registry = new SerializerRegistry(this.schema, {
      user: Serializer.extend({
        include: ['profile']
      }),
      profile: Serializer.extend({
        include: ['user']
      })
    });
  });

  // Failing test for issue [#1061](https://github.com/samselikoff/ember-cli-mirage/issues/1061)
  test('it serializes one to one relations', function(assert) {
    let user = this.schema.create('user');
    let profile = this.schema.create('profile', { user });
    user.update({ profile });

    let result = this.registry.serialize(user);

    assert.ok(result);
  });
});
