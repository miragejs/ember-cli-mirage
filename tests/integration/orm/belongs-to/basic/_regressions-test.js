import { Model, belongsTo } from 'ember-cli-mirage';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import { module, test } from 'qunit';

module('Integration | ORM | Belongs To | One Way | regressions');

test('belongsTo accessors works when foreign key is present but falsy', function(assert) {
  let db = new Db({
    posts: [],
    authors: []
  });

  let schema = new Schema(db, {
    post: Model.extend(),
    author: Model.extend({
      post: belongsTo()
    })
  });

  db.posts.insert({ id: 0, name: 'some post' });
  let insertedAuthor = db.authors.insert({ name: 'foo', postId: 0 });
  let relatedPost = schema.authors.find(insertedAuthor.id).post;
  assert.equal('some post', relatedPost ? relatedPost.name : undefined);
});
