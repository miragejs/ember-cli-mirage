import HasOneHelper from './has-one-helper';
import {module, test} from 'qunit';

module('Integration | Schema | hasOne #setAssociation', {
  beforeEach: function() {
    this.helper = new HasOneHelper();
  }
});

/*
  newAssociation behavior works regardless of the state of the parent
*/

[
  'savedParentNoChild',
  'savedParentNewChild',
  'savedParentSavedChild',
  'newParentNoChild',
  'newParentNewChild',
  'newParentSavedChild',
].forEach(state => {

  test(`a ${state} can update its association to a saved child`, function(assert) {
    let [wordSmith] = this.helper[state]();
    let savedPost = this.helper.savedChild();

    wordSmith.favoritePost = savedPost;

    assert.equal(wordSmith.favoritePostId, savedPost.id);
    assert.deepEqual(wordSmith.favoritePost, savedPost);
  });

  // Note: We imitate Rails behavior here. If a saved parent sets a has_one, it will save the child
  test(`a ${state} can update its association to a new child, which saves the child`, function(assert) {
    let [wordSmith] = this.helper[state]();
    let newPost = this.helper.newChild();

    wordSmith.favoritePost = newPost;

    if (wordSmith.isSaved()) {
      assert.ok(newPost.id, 'the child was saved');
      assert.equal(wordSmith.favoritePostId, newPost.id);
    }
    assert.deepEqual(wordSmith.favoritePost, newPost);
  });

  test(`a ${state} can update its association to a null parent`, function(assert) {
    let [wordSmith, post] = this.helper[state]();

    wordSmith.favoritePost = null;

    assert.equal(wordSmith.favoritePostId, null);
    assert.deepEqual(wordSmith.favoritePost, null);

    if (post) {
      if (post.isSaved()) {
        post.reload();
      }

      assert.equal(post.wordSmithId, null, 'old saved children have their fks cleared');
    }
  });

});
