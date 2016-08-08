import moduleForAcceptance from '../helpers/module-for-acceptance';
import { test } from 'qunit';

moduleForAcceptance('Acceptance | Fixtures', {
  beforeEach() {
    this.store = this.application.__container__.lookup('service:store');
  }
});

test('I can use fixtures', function(assert) {
  server.loadFixtures();

  visit(`/word-smiths/1`);

  andThen(() => {
    let wordSmithsInStore = this.store.peekAll('word-smith');
    let blogPostsInStore = this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);

    let testBlogPosts = this.store.peekRecord('blog-post', 1);
    assert.equal(testBlogPosts.get('title'), 'Lorem');
  });
});

test('I can use fixtures with the filename api', function(assert) {
  server.loadFixtures('word-smiths', 'blog-posts');

  visit(`/word-smiths/1`);

  andThen(() => {
    let wordSmithsInStore = this.store.peekAll('word-smith');
    let blogPostsInStore = this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);

    let testBlogPosts = this.store.peekRecord('blog-post', 1);
    assert.equal(testBlogPosts.get('title'), 'Lorem');
  });
});

test('I can use fixtures specifying the relative folder path', function(assert) {
  server.loadFixtures('', 'case-00/');

  visit(`/word-smiths/1`);

  andThen(() => {
    let wordSmithsInStore = this.store.peekAll('word-smith');
    let blogPostsInStore = this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);

    let testBlogPosts = this.store.peekRecord('blog-post', 1);
    assert.equal(testBlogPosts.get('title'), 'Lorem 00');
  });
});

test('I can use fixtures specifying the relative model path', function(assert) {
  server.loadFixtures('', 'case-00/blog-posts');

  visit(`/word-smiths/1`);

  andThen(() => {
    let wordSmithsInStore = this.store.peekAll('word-smith');
    let blogPostsInStore = this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);

    let testBlogPosts = this.store.peekRecord('blog-post', 1);
    assert.equal(testBlogPosts.get('title'), 'Lorem 00');
  });
});

test('I can use specific fixtures and the last one specified is the one loade, case folders, test 0', function(assert) {
  server.loadFixtures('', 'case-00/', 'case-01/');

  visit(`/word-smiths/1`);

  andThen(() => {
    let wordSmithsInStore = this.store.peekAll('word-smith');
    let blogPostsInStore = this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);

    let testBlogPosts = this.store.peekRecord('blog-post', 1);
    assert.equal(testBlogPosts.get('title'), 'Lorem 01');
  });
});

test('I can use specific fixtures and the last one specified is the one loade, case folders, test 1', function(assert) {
  server.loadFixtures('', 'case-01/', 'case-00/');

  visit(`/word-smiths/1`);

  andThen(() => {
    let wordSmithsInStore = this.store.peekAll('word-smith');
    let blogPostsInStore = this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);

    let testBlogPosts = this.store.peekRecord('blog-post', 1);
    assert.equal(testBlogPosts.get('title'), 'Lorem 00');
  });
});

test('I can use specific fixtures and the last one specified is the one loade, case folders + model files, test 0', function(assert) {
  server.loadFixtures('', 'case-00/', 'case-01/blog-posts');

  visit(`/word-smiths/1`);

  andThen(() => {
    let wordSmithsInStore = this.store.peekAll('word-smith');
    let blogPostsInStore = this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);

    let testBlogPosts = this.store.peekRecord('blog-post', 1);
    assert.equal(testBlogPosts.get('title'), 'Lorem 01');
  });
});

test('I can use specific fixtures and the last one specified is the one loade, case folders + model files, test 1', function(assert) {
  server.loadFixtures('', 'case-01/', 'case-00/blog-posts');

  visit(`/word-smiths/1`);

  andThen(() => {
    let wordSmithsInStore = this.store.peekAll('word-smith');
    let blogPostsInStore = this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);

    let testBlogPosts = this.store.peekRecord('blog-post', 1);
    assert.equal(testBlogPosts.get('title'), 'Lorem 00');
  });
});

test('I can use specific fixtures and the last one specified is the one loade, case folders + model files, test 1', function(assert) {
  server.loadFixtures('', 'case-01/', 'case-00/blog-posts', 'case-00/specific-00/');

  visit(`/word-smiths/1`);

  andThen(() => {
    let wordSmithsInStore = this.store.peekAll('word-smith');
    let blogPostsInStore = this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);

    let testBlogPosts = this.store.peekRecord('blog-post', 1);
    assert.equal(testBlogPosts.get('title'), 'Lorem 00-00');
  });
});
