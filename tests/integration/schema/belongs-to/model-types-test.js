import Mirage from 'ember-cli-mirage';
import Model from 'ember-cli-mirage/orm/model';

import Schema from 'ember-cli-mirage/orm/schema';

import Db from 'ember-cli-mirage/db';
import {module, test} from 'qunit';

module('Integration | Schema | belongsTo different model`s types', {
  beforeEach: function() {
    var User = Model.extend({
      posts: Mirage.hasMany('post', {inverse: 'writer'}),
    });

    var Post = Model.extend({
      writer: Mirage.belongsTo('user'),
      editor: Mirage.belongsTo('user'),
    });

    this.db = new Db({
      users: [],
      posts: [],
    });
    this.schema = new Schema(this.db);

    this.schema.registerModels({
      user: User,
      post: Post,
    });
  },
});

test('post has a writer as user type', function(assert) {
  this.schema.create('user', {name: 'Exelord'});
  this.schema.create('post', {title: 'Post about polymorphic', writerId: 1});

  let user = this.schema.user.find(1);
  let post = this.schema.post.find(1);

  assert.equal(post.writer.id, user.id);
});

test('user has many posts through writer type', function(assert) {
  this.schema.create('user', {name: 'Exelord'});
  this.schema.create('user', {name: 'Exelord The Best Editor'});
  this.schema.create('post', {title: 'Post about polymorphic', writerId: 1, editorId: 2});

  let user = this.schema.user.find(1);
  let post = this.schema.post.find(1);

  assert.equal(user.posts[0].id, post.id);
});
