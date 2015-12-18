import Mirage from 'ember-cli-mirage';
import Model from 'ember-cli-mirage/orm/model';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import {module, test} from 'qunit';

// Model classes are defined statically, just like in a typical app
var User = Model.extend({
  localAddresses: Mirage.hasMany()
});
var Address = Model.extend();

module('Integration | Schema | Misc', {
  beforeEach: function() {
    this.db = new Db({
      registeredUsers: [],
      localAddresses: []
    });
    this.schema = new Schema(this.db);

    this.schema.registerModels({
      registeredUser: User,
      localAddress: Address
    });

    this.schema.registeredUser.create({ id: 1, name: 'Link' });
    this.schema.localAddress.create({ id: 1, country: 'Hyrule', registeredUserId: 1 });
  }
});

// By running two tests, we force the statically-defined classes to be
// registered twice.
test('safely initializes associations', function(assert) {
  assert.equal(this.schema.registeredUser.find(1).localAddresses[0].country, 'Hyrule');
});
test('safely initializes associations again', function(assert) {
  assert.equal(this.schema.registeredUser.find(1).localAddresses[0].country, 'Hyrule');
});

test('model.modelTypeKey returns a dasherizes string', function(assert) {
  let user = this.schema.registeredUser.find(1);

  assert.equal(user.modelTypeKey, 'registered-user');
});
