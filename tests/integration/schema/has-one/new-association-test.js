import HasOneHelper from './has-one-helper';
import {module, test} from 'qunit';

module('Integration | Schema | hasOne #newAssociation', {
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

  test(`a ${state} can build a new associated parent`, function(assert) {
    let [wordSmith] = this.helper[state]();

    let post = wordSmith.newFavoritePost({title: 'Thinking about millenials'});

    assert.ok(!post.id, 'the parent was not persisted');
    assert.deepEqual(wordSmith.favoritePost, post);
    assert.equal(wordSmith.favoritePostId, null);

    wordSmith.save();

    assert.ok(post.id, 'saving the parent persists the child');
    assert.equal(wordSmith.favoritePostId, post.id, 'the childs fk was updated');
  });

});
