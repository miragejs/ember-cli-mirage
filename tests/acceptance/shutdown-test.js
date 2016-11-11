import moduleForAcceptance from '../helpers/module-for-acceptance';
import { test } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

moduleForAcceptance('Acceptance | Shutdown | Test Environment', {
  beforeEach() {
    this.store = this.application.__container__.lookup('service:store');
  }
});

test('Upon shutdown deletes cached hasMany on models', function(assert) {
  let blogPosts = server.createList('blog-post', 10);
  let wordSmith = server.create('word-smith', { blogPostIds: blogPosts.map((blogPost) => blogPost.id) });

  visit(`/word-smiths/${wordSmith.id}`);

  andThen(() => {
    let registry = server.schema._registry;
    let wordSmithClass = registry.wordSmith.class;

    let wordSmithStore = this.store.peekRecord('word-smith', wordSmith.id);
    assert.equal(wordSmithStore.get('blogPosts.length'), 10);

    // Cached blog posts association on wordSmithClass hasManyAssociations on prototype level
    assert.equal(wordSmithClass.prototype.hasManyAssociations.blogPosts._cachedChildren.models.length, 10, '10 cached blogPosts');

    // destroyApp calls server.shutdown()
    destroyApp(this.application);

    // Cached children removed
    assert.equal(wordSmithClass.prototype.hasManyAssociations.blogPosts._cachedChildren.models.length, 0);

    // For destroyApp on moduleForAcceptance afterEach
    this.application = startApp();
  });
});

