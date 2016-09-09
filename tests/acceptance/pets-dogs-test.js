import {test} from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

let petsDogs;

moduleForAcceptance('Acceptance | Pets / Dogs (subdirectory)', {
  beforeEach() {
    petsDogs = server.createList('pet/dog', 3);
  }
});

test('I can view the nested directory', function(assert) {
  visit('/pets/dogs');

  andThen(function() {
    assert.equal(currentRouteName(), 'pets/dogs');
    assert.equal(find('li').length, 3);
    assert.equal(find('li:first .name').text().trim(), petsDogs[0].name);
  });
});
