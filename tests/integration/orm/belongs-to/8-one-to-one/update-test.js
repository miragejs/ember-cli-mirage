import Helper from './_helper';
import { Model } from 'ember-cli-mirage';
import { module, test } from 'qunit';

module('Integration | ORM | Belongs To | One To One | update', function(hooks) {
  hooks.beforeEach(function() {
    this.helper = new Helper();
    this.helper.schema.registerModel('foo', Model);
  });

  test('updating a one to one relation works', function(assert) {
    let { schema } = this.helper;
    let user = schema.create('user');
    let profile = schema.create('profile', { user });

    let result = user.update({ profile });

    assert.ok(result);
  });
});
