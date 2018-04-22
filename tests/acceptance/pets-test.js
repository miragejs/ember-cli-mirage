import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

let pets;

moduleForAcceptance('Acceptance | Pets', {
  beforeEach() {
    pets = server.createList('pet', 3);
  }
});

test('I can view the pets', async function(assert) {
  await visit('/pets');

  andThen(function() {
    assert.equal(currentRouteName(), 'pets');
    assert.equal(find('li').length, 3);
    assert.equal(find('li:first .name').text().trim(), pets[0].name);
  });
});

test('I can create a new pet', async function(assert) {
  await visit('/pets');

  await fillIn('input.inputName', 'Brownie');
  await click('button:contains(create)');

  andThen(function() {
    assert.equal(currentRouteName(), 'pets');
    assert.equal(find('li').length, 4);
    assert.equal(find('li:last .name').text(), 'Brownie');
    assert.equal(find('li:last .alive').text(), 'false');
  });

  await fillIn('input.inputName', 'Lucy');
  await click('input.inputAlive');
  await click('button:contains(create)');

  andThen(function() {
    assert.equal(currentRouteName(), 'pets');
    assert.equal(find('li').length, 5);
    assert.equal(find('li:last .name').text(), 'Lucy');
    assert.equal(find('li:last .alive').text(), 'true');
  });
});
