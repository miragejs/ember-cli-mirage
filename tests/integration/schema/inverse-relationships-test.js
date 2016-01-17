import Mirage from 'ember-cli-mirage';
import Model from 'ember-cli-mirage/orm/model';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import {module, test} from 'qunit';

module('Integration | Schema | Inverse relationships');

test('it can read inverse one-to-one relationships', function(assert) {
  var db = new Db({
    users: [
      {id: 1, name: 'Link', addressId: 1}
    ],
    addresses: [
      {id: 1, userId: 1}
    ]
  });

  var User = Model.extend({
    address: Mirage.belongsTo()
  });

  var Address = Model.extend({
    user: Mirage.belongsTo()
  });

  var schema = new Schema(db);
  schema.registerModels({
    user: User,
    address: Address
  });

  var address = schema.address.find(1);
  assert.ok(address);
});

test('it can read inverse one-to-many relationships', function(assert) {
  var db = new Db({
    users: [
      {id: 1, name: 'Link', projectIds: [1,2]}
    ],
    projects: [
      {id: 1, userId: 1},
      {id: 2, userId: 1}
    ]
  });

  var User = Model.extend({
    projects: Mirage.hasMany()
  });

  var Project = Model.extend({
    user: Mirage.belongsTo()
  });

  var schema = new Schema(db);
  schema.registerModels({
    user: User,
    project: Project
  });

  var project = schema.project.find(1);
  assert.ok(project);
});
