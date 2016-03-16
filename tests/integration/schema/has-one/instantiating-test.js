import { Model, hasOne } from 'ember-cli-mirage';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import {module, test} from 'qunit';

module('Integration | Schema | hasOne instantiating with params', {
  beforeEach: function() {
    let db = new Db({
      users: [],
      homeAddresses: [
        {id: 1, name: '123 Hyrule Way'},
      ]
    });

    this.schema = new Schema(db, {
      user: Model.extend({
        homeAddress: hasOne()
      }),
      homeAddress: Model.extend()
    });

    this.address = this.schema.homeAddress.find(1);
  }
});

test('the child has a fk added to its attrs', function(assert) {
  let newChild = this.schema.homeAddress.new();

  assert.deepEqual(newChild.attrs, {userId: null});
  assert.deepEqual(this.address.attrs, {id: '1', name: '123 Hyrule Way', userId: null});
});

test('the parent accepts a saved child id', function(assert) {
  let user = this.schema.user.new({homeAddressId: 1});

  assert.deepEqual(user.homeAddress, this.address);
  assert.deepEqual(user.homeAddressId, '1');
});

test('the parent errors if the child id doesnt exist', function(assert) {
  assert.throws(function() {
    this.schema.user.new({homeAddressId: 9});
  }, /Couldn't find/);
});

test('the parent accepts a null child id', function(assert) {
  let user = this.schema.user.new({homeAddressId: null});

  assert.deepEqual(user.homeAddressId, null);
  assert.deepEqual(user.homeAddress, null);
});

test('the parent accepts a saved child model', function(assert) {
  let user = this.schema.user.new({homeAddress: this.address});

  assert.deepEqual(user.homeAddressId, '1');
  assert.deepEqual(user.homeAddress, this.address);
});

test('the parent accepts a saved child model and id', function(assert) {
  let user = this.schema.user.new({homeAddress: this.address, homeAddressId: this.address.id});

  assert.deepEqual(user.homeAddressId, '1');
  assert.deepEqual(user.homeAddress, this.address);
});

test('the parent accepts a new child model', function(assert) {
  let newAddress = this.schema.homeAddress.new();
  let user = this.schema.user.new({homeAddress: newAddress});

  assert.equal(user.homeAddressId, null);
  assert.deepEqual(user.homeAddress, newAddress);
});

test('the parent accepts a null child model', function(assert) {
  let user = this.schema.user.new({homeAddress: null});

  assert.equal(user.homeAddressId, null);
  assert.deepEqual(user.homeAddress, null);
});

test('the parent accepts no reference to a child id or model as empty obj', function(assert) {
  let user = this.schema.user.new({});

  assert.equal(user.homeAddressId, null);
  assert.deepEqual(user.homeAddress, null);
});

test('the parent accepts no reference to a child id or model', function(assert) {
  let user = this.schema.user.new();

  assert.equal(user.homeAddressId, null);
  assert.deepEqual(user.homeAddress, null);
});
