import { Model, hasOne } from 'ember-cli-mirage';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';

/*
  A model with a hasOne association can be in six states
  with respect to its association. This helper class
  returns a child (and its association) in these various states.

  The return value is an array of the form

    [parent, child]

  where the child may be undefined.
*/
export default class HasOneHelper {

  constructor() {
    this.schema = new Schema(new Db(), {
      wordSmith: Model.extend({
        favoritePost: hasOne('blog-post')
      }),
      blogPost: Model
    });
  }

  savedParentNoChild() {
    let bob = this.schema.wordSmith.create({name: 'Bob'});

    return [bob, undefined];
  }

  savedParentNewChild() {
    let bob = this.schema.wordSmith.create({name: 'Bob'});
    let post = bob.newFavoritePost({title: 'Thoughtlead my heart'});

    return [bob, post];
  }

  savedParentSavedChild() {
    let bob = this.schema.wordSmith.create({name: 'Bob'});
    let postRecord = this.schema.db.blogPosts.insert({wordSmithId: bob.id, title: 'Thoughtlead my heart'});
    let post = this.schema.blogPost.find(postRecord.id);

    return [bob, post];
  }

  newParentNoChild() {
    return [this.schema.wordSmith.new({name: 'Bob'}), undefined];
  }

  newParentNewChild() {
    let bob = this.schema.wordSmith.new({name: 'Bob'});
    let newPost = this.schema.blogPost.new({title: 'Thoughtlead my heart'});

    bob.favoritePost = newPost;

    return [bob, newPost];
  }

  newParentSavedChild() {
    let bob = this.schema.wordSmith.new({name: 'Bob'});
    let post = this.schema.blogPost.create({title: 'Thoughtlead my heart'});

    bob.favoritePost = post;

    return [bob, post];
  }

  // Just a saved unassociated parent. The id is high so as not to
  // interfere with any other parents
  savedChild() {
    return this.schema.blogPost.create({title: 'Thoughtlead my heart'});
  }

  newChild() {
    return this.schema.blogPost.new({title: 'Thoughtlead my heart'});
  }

}
