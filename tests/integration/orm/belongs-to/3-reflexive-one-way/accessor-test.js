import Helper, { states } from './_helper';
import { module, test } from 'qunit';

module('Integration | ORM | Belongs To | Reflexive, one-way | accessor', {
  beforeEach() {
    this.helper = new Helper();
  }
});

/*
  The reference to a belongs-to association is correct, for all states
*/
states.forEach((state) => {

  test(`the references of a ${state} are correct`, function(assert) {
    let [ user, parent ] = this.helper[state]();

    assert.deepEqual(user.parent, parent ? parent : null, 'the model reference is correct');
    assert.equal(user.parentId, parent ? parent.id : null, 'the modelId reference is correct');
  });

});
