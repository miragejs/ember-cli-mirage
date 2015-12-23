import Mirage from 'ember-cli-mirage';
import Model from 'ember-cli-mirage/orm/model';

import Schema from 'ember-cli-mirage/orm/schema';

import Db from 'ember-cli-mirage/db';
import {module, test} from 'qunit';

module('Integration | Schema | belongsTo polymorphic relations', {
  beforeEach: function() {
    var Member = Model.extend({
      resource: Mirage.belongsTo('resource', {polymorphic: true}),
    });

    var Resource = Model.extend({
      members: Mirage.hasMany(),
    });

    var Post = Resource.extend();

    this.db = new Db({
      members: [],
      posts: [],
    });

    this.schema = new Schema(this.db);

    this.schema.registerModels({
      member: Member,
      post: Post,
    });
  },
});

test('create polymorphic relation', function(assert) {
  this.schema.create('post', {title: 'Resource with polymorphic relation'});
  this.schema.create('member', {name: 'Exelord', resourceId: 1, resourceType: 'post'});

  let member = this.schema.member.find(1);
  let post = this.schema.post.find(1);

  assert.equal(member.resource.id, post.id);
  assert.equal(post.members[0].id, member.id);
});

test('update polymorphic relation', function(assert) {
  this.schema.create('post', {title: 'Resource with polymorphic relation'});
  this.schema.create('post', {title: 'Another Resource with polymorphic relation'});

  this.schema.create('member', {name: 'Exelord', resourceId: 1, resourceType: 'post'});
  this.schema.create('member', {name: 'Maciej', resourceId: 2, resourceType: 'post'});

  let member = this.schema.member.find(1);
  let anotherMember = this.schema.member.find(2);
  let post = this.schema.post.find(1);
  let anotherPost = this.schema.post.find(2);

  member.update({resource: anotherPost});
  post.update({members: [anotherMember]});

  assert.equal(member.resource.id, anotherPost.id);
  assert.equal(post.members[0].id, anotherMember.id);
});
