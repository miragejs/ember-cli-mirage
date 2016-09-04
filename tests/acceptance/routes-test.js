import moduleForAcceptance from '../helpers/module-for-acceptance';
import { test } from 'qunit';
import Ember from 'ember';

moduleForAcceptance('Acceptance | Routes', {
  beforeEach() {
    this.store = this.application.__container__.lookup('service:store');
  }
});

test('Routes post requests', function(assert) {
  Ember.run(() => {
    let post = this.store.createRecord('post');
    post.save();
  });

  andThen(() => {
    assert.equal(server.schema.posts.all().models.length, 1);
  });

  Ember.run(() => {

  });
});
