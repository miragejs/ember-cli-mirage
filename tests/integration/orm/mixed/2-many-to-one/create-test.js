import Helper from './_helper';
import { Model } from 'ember-cli-mirage';
import { module, test } from 'qunit';

module('Integration | ORM | Mixed | Many To One | create', {
  beforeEach() {
    this.helper = new Helper();
    this.helper.schema.registerModel('foo', Model);
  }
});

test('it sets up associations correctly when passing in the foreign key', function(assert) {
  let { schema } = this.helper;
  let user = schema.create('user');
  let post = schema.create('post', {
    userId: user.id
  });
  user.reload();

  assert.deepEqual(post.user.attrs, user.attrs);
  assert.equal(post.userId, user.id);
  assert.ok(user.posts.includes(post), 'inverse was set');
  assert.deepEqual(user.postIds, [ post.id ]);

  let { db } = this.helper;
  assert.equal(db.posts.length, 1);
  assert.deepEqual(db.posts[0], { id: '1', userId: '1' });
  assert.equal(db.users.length, 1);
  assert.deepEqual(db.users[0], { id: '1', postIds: [ '1' ] });
});

test('it does not mutate source fixture data when modifying associations', function(assert) {
  let { db, schema } = this.helper;
  let sourceData = {
    users: [{ id: '1', postIds: ['1'] }],
    posts: [{ id: '1', userId: '1' }]
  };
  db.loadData(sourceData);

  let user = schema.users.find('1');
  let post1 = schema.posts.find('1');
  let post2 = schema.create('post', {
    userId: user.id
  });

  assert.deepEqual(post2.user.attrs, user.attrs);
  assert.equal(post2.userId, user.id);
  assert.ok(user.posts.includes(post2), 'inverse was set');
  assert.deepEqual(user.postIds, [ post1.id, post2.id ]);

  assert.equal(db.posts.length, 2);
  assert.deepEqual(db.posts[0], { id: '1', userId: '1' });
  assert.deepEqual(db.posts[1], { id: '2', userId: '1' });
  assert.equal(db.users.length, 1);
  assert.deepEqual(db.users[0], { id: '1', postIds: [ '1', '2' ] });

  assert.deepEqual(sourceData.users[0].postIds, ['1'], 'source data is not affected');
});

test('it sets up associations correctly when passing in the association itself', function(assert) {
  let { schema } = this.helper;
  let user = schema.create('user');
  let post = schema.create('post', {
    user
  });

  assert.deepEqual(post.user.attrs, user.attrs);
  assert.equal(post.userId, user.id);
  assert.ok(user.posts.includes(post), 'inverse was set');
  assert.deepEqual(user.postIds, [ post.id ]);

  let { db } = this.helper;
  assert.equal(db.posts.length, 1);
  assert.deepEqual(db.posts[0], { id: '1', userId: '1' });
  assert.equal(db.users.length, 1);
  assert.deepEqual(db.users[0], { id: '1', postIds: [ '1' ] });
});

test('it throws an error if a model is passed in without a defined relationship', function(assert) {
  let { schema } = this.helper;

  assert.throws(function() {
    schema.create('post', {
      foo: schema.create('foo')
    });
  }, /you haven't defined that key as an association on your model/);
});

test('it throws an error if a collection is passed in without a defined relationship', function(assert) {
  let { schema } = this.helper;
  schema.create('foo');
  schema.create('foo');

  assert.throws(function() {
    schema.create('post', {
      foos: schema.foos.all()
    });
  }, /you haven't defined that key as an association on your model/);
});
