import HasOneHelper from './has-one-helper';
import {module, test} from 'qunit';

module('Integration | Schema | hasOne #setAssociationId', {
  beforeEach: function() {
    this.helper = new HasOneHelper();
  }
});

[
  'savedParentNoChild',
  'savedParentNewChild',
  'savedParentSavedChild',
  'newParentNoChild',
  'newParentNewChild',
  'newParentSavedChild',
].forEach(state => {

  test(`a ${state} can update its association to a saved child via childId`, function(assert) {
    let [wordSmith] = this.helper[state]();
    let savedPost = this.helper.savedChild();

    wordSmith.favoritePostId = savedPost.id;
    savedPost.reload();

    assert.equal(wordSmith.favoritePostId, savedPost.id);
    assert.deepEqual(wordSmith.favoritePost, savedPost);
  });

});

[
  'savedParentSavedChild',
  'newParentSavedChild',
].forEach(state => {

  test(`a ${state} can clear its association via a null parentId`, function(assert) {
    let [wordSmith] = this.helper[state]();

    wordSmith.favoritePostId = null;

    assert.equal(wordSmith.favoritePostId, null);
    assert.deepEqual(wordSmith.favoritePost, null);
  });

});

