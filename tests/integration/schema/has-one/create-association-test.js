import HasOneHelper from './has-one-helper';
import {module, test} from 'qunit';

module('Integration | Schema | hasOne #createAssociation', {
  beforeEach: function() {
    this.helper = new HasOneHelper();
  }
});

/*
  createAssociation behavior works regardless of the state of the parent
*/

[
  'savedParentNoChild',
  'savedParentNewChild',
  'savedParentSavedChild',
  'newParentNoChild',
  'newParentNewChild',
  'newParentSavedChild',
].forEach(state => {

  test(`a ${state} can create an associated child`, function(assert) {
    let [wordSmith] = this.helper[state]();

    let post = wordSmith.createFavoritePost({title: 'A new post'});

    assert.ok(post.id, 'the child was persisted');
    assert.ok(wordSmith.id, 'the parent was persisted, whether it was new or saved');
    assert.deepEqual(wordSmith.favoritePost, post);
    assert.deepEqual(wordSmith.favoritePostId, post.id);
  });

});
