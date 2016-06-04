import HasOneHelper from './has-one-helper';
import {module, test} from 'qunit';

module('Integration | Schema | hasOne #accessor', {
  beforeEach: function() {
    this.helper = new HasOneHelper();
  }
});

/*
  #association behavior works regardless of the state of the child
*/

[
  'savedParentNoChild',
  'savedParentNewChild',
  'savedParentSavedChild',
  'newParentNoChild',
  'newParentNewChild',
  'newParentSavedChild',
].forEach(state => {

  test(`the references of a saved parent with no child are correct`, function(assert) {
    let [wordSmith, blogPost] = this.helper[state]();

    assert.deepEqual(wordSmith.favoritePost, blogPost ? blogPost : null, 'the model reference is correct');
    assert.deepEqual(wordSmith.favoritePostId, blogPost ? blogPost.id : null, 'the modelId reference is correct');
  });

});
