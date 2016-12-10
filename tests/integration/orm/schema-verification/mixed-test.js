import { Model, hasMany, belongsTo } from 'ember-cli-mirage';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import { module, test } from 'qunit';

module('Integration | ORM | Schema Verification | Mixed');

test('unnamed one-to-many associations are correct', function(assert) {
  let schema = new Schema(new Db(), {
    wordSmith: Model.extend({
      blogPosts: hasMany()
    }),
    blogPost: Model.extend({
      wordSmith: belongsTo()
    })
  });

  let association = schema.associationsFor('word-smith').blogPosts;
  let inverse = schema.associationsFor('blog-post').wordSmith;

  assert.equal(association.key, 'blogPosts');
  assert.equal(association.modelName, 'blog-post');
  assert.equal(association.ownerModelName, 'word-smith');
  assert.deepEqual(association.inverse(), inverse);
});

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
