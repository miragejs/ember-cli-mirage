import Helper, { states } from './_helper';
import { module, test } from 'qunit';

module('Integration | ORM | Has Many | Reflexive | association #setIds', {
  beforeEach() {
    this.helper = new Helper();
  }
});

/*
  The model can update its association via parentId, for all states
*/
states.forEach((state) => {

  test(`a ${state} can update its association to a saved parent via parentId`, function(assert) {
    let [ tag ] = this.helper[state]();
    let savedTag = this.helper.savedChild();

    tag.tagIds = [ savedTag.id ];

    assert.deepEqual(tag.tags.models[0].attrs, savedTag.attrs);
    assert.deepEqual(tag.tagIds, [ savedTag.id ]);
  });

  test(`a ${state} can clear its association via a null parentId`, function(assert) {
    let [ tag ] = this.helper[state]();

    tag.tagIds = null;

    assert.deepEqual(tag.tags.models, []);
    assert.deepEqual(tag.tagIds, []);
  });

});
