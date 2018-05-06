import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Edit');

test('I can edit a contact', async function(assert) {
  let contact = server.create('contact');

  await visit(`/${contact.id}`);
  await click('button:contains(Edit)');
  await fillIn('input', 'Shiek');
  await click('button:contains(Save)');

  assert.equal(currentRouteName(), 'contact');
  assert.equal(find('p:first').text(), 'The contact is Shiek');
});
