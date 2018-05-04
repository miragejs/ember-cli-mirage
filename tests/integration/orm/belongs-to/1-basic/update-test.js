import Helper from './_helper';
import { Model, belongsTo, hasMany } from 'ember-cli-mirage';
import Schema from 'ember-cli-mirage/orm/schema';
import { module, test } from 'qunit';

module('Integration | ORM | Belongs To | Basic | update', function(hooks) {
  hooks.beforeEach(function() {
    this.helper = new Helper();

    this.helper.schema = new Schema(this.helper.db, {
      author: Model.extend({
        posts: hasMany()
      }),
      post: Model.extend({
        author: belongsTo()
      })
    });

    this.helper.schema.registerModel('foo', Model);
  });

  test('it works if the parent id changes', function(assert) {
    let king = this.helper.schema.create('author', { name: 'King' });
    let queen = this.helper.schema.create('author', { name: 'Queen' });
    let post = this.helper.schema.create('post', { authorId: king.id, title: 'Create' });

    post.update({ authorId: queen.id, title: 'Update' });

    assert.equal(post.title, 'Update');
    assert.equal(post.attrs.title, 'Update');
    assert.deepEqual(this.helper.schema.db.posts[0], { id: '1', authorId: queen.id, title: 'Update' });
  });

  test('it works if the parent id does not change', function(assert) {
    let king = this.helper.schema.create('author');
    let post = this.helper.schema.create('post', { authorId: king.id, title: 'Create' });

    post.update({ authorId: king.id, title: 'Update' });

    assert.equal(post.title, 'Update');
    assert.equal(post.attrs.title, 'Update');
    assert.deepEqual(this.helper.schema.db.posts[0], { id: '1', authorId: king.id, title: 'Update' });
  });
});
