import moduleForAcceptance from '../helpers/module-for-acceptance';
import { test } from 'qunit';
import Ember from 'ember';

moduleForAcceptance('Acceptance | Routes', {
  beforeEach() {
    this.store = this.application.__container__.lookup('service:store');
    server.logging = true;
  }
});

test('Routes post requests', function(assert) {
  let post;
  Ember.run(() => {
    post = this.store.createRecord('post');
    post.save();
  });

  andThen(() => {
    assert.equal(server.schema.posts.all().models.length, 1);
  });

  Ember.run(() => {
    let comment = this.store.createRecord('comment');
    comment.set('post', post);
    comment.save();
  });

  andThen(() => {
    assert.equal(server.schema.comments.all().models.length, 1);
  });
});
