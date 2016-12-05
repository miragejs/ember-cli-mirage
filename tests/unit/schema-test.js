import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import { Model, belongsTo } from 'ember-cli-mirage';
import {module, test} from 'qunit';

module('Unit | Schema');

test('it can be instantiated', function(assert) {
  let dbMock = {};
  let schema = new Schema(dbMock);
  assert.ok(schema);
});

test('it cannot be instantiated without a db', function(assert) {
  assert.throws(function() {
    new Schema();
  }, /requires a db/);
});

test('modelFor returns model for given type if registered', function(assert) {
  let db = new Db();
  let schema = new Schema(db);

  assert.equal(schema.modelFor('article'), null);

  let authorModel = Model.extend({
  });
  let articleModel = Model.extend({
    author: belongsTo()
  });
  schema.registerModel('article', articleModel);
  schema.registerModel('author', authorModel);

  assert.deepEqual(schema.modelFor('article').foreignKeys, ['authorId']);
  assert.deepEqual(schema.modelFor('author').foreignKeys, []);
});
