import Helper, { states } from './_helper';
import { module, test } from 'qunit';

module('Integration | ORM | Has Many | Reflexive | association #create', {
  beforeEach() {
    this.helper = new Helper();
  }
});

/*
  The model can create a has-many association, for all states
*/
states.forEach((state) => {

  test(`a ${state} can create an associated parent`, function(assert) {
    let [ tag ] = this.helper[state]();
    let initialCount = tag.tags.models.length;

    let blueTag = tag.createTag({ name: 'Blue' });

    assert.ok(blueTag.id, 'the child was persisted');
    assert.equal(tag.tags.models.length, initialCount + 1, 'the collection size was increased');
    assert.deepEqual(tag.tags.models.filter((a) => a.id === blueTag.id)[0].attrs, blueTag.attrs, 'the model was added to tag.tags');
    assert.ok(tag.tagIds.indexOf(blueTag.id) > -1, 'the id was added to the fks array');
    assert.ok(tag.attrs.tagIds.indexOf(blueTag.id) > -1, 'fks were persisted');
  });

});
