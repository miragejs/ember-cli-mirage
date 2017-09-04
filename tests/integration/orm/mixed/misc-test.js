import { Model, belongsTo, hasMany } from 'ember-cli-mirage';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import { module, test } from 'qunit';

module('Integration | ORM | Mixed | Misc');

test('destroy properly clears dependents', function(assert) {
  let db = new Db();

  let schema = new Schema(db, {
    user: Model.extend({
      posts: hasMany()
    }),
    post: Model.extend({
      user: belongsTo(),
      heroImage: belongsTo({ polymorphic: true })
    }),
    photo: Model
  });

  let user = schema.users.create();
  let post = user.createPost();
  let photoOne = schema.photos.create();
  post.heroImage = photoOne;
  post.save();
  post.destroy();

  // This line below is throwing an error:
  // Mirage: You're instantiating a user that has a postIds of 2,1, but some of those records don't exist in the database.
  let retrievedUser = schema.users.all().models[0];
  assert.equal(retrievedUser.posts.models.length, 0, 'No posts remain');
});
