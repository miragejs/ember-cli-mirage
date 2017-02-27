import {test} from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

const data = {
  contacts: [
    {id: "1", name: "Foo"}
  ]
};

const LOCALSTORAGE_KEY_DUMP = 'ember-cli-mirage:persistence';
const LOCALSTORAGE_KEY_VERSION = 'ember-cli-mirage:persistence-version';

moduleForAcceptance('Acceptance | Persistence', {
  beforeEach() {
    window.localStorage.setItem(LOCALSTORAGE_KEY_DUMP, JSON.stringify(data));
    window.localStorage.setItem(LOCALSTORAGE_KEY_VERSION, 1);

    server.persistDb = true;
    server.persistDbVersion = 1;
    server.logging = true;

    server.populateDatabase();
  }
});

test('I can view a contact', async function(assert) {
  await visit('/1');

  assert.equal(currentRouteName(), 'contact');
  assert.equal(find('p:first').text(), 'The contact is Foo');
});

test('I can delete a contact', async function(assert) {
  await visit('/1');
  await click('button:contains(Delete)');

  let dump = window.localStorage.getItem(LOCALSTORAGE_KEY_DUMP);
  dump = JSON.parse(dump);
  assert.equal(dump.contacts.length, 0);
});
