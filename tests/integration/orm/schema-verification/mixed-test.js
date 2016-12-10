import { Model, hasMany, belongsTo } from 'ember-cli-mirage';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import { module, test } from 'qunit';

module('Integration | ORM | Schema Verification | Mixed');

test('a named one-to-many association is correct', function(assert) {
  let schema = new Schema(new Db(), {
    wordSmith: Model.extend({
      posts: hasMany('blog-post')
    }),
    blogPost: Model.extend({
      author: belongsTo('word-smith')
    })
  });

  let association = schema.associationsFor('word-smith').posts;
  let inverse = schema.associationsFor('blog-post').author;

  assert.equal(association.key, 'posts');
  assert.equal(association.modelName, 'blog-post');
  assert.equal(association.ownerModelName, 'word-smith');
  assert.deepEqual(association.inverse(), inverse);
});
