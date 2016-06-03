import {test} from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

let contact1;
let contact2;

let address1;
let address2;

moduleForAcceptance('Acceptance | ManyToMany', {
  beforeEach() {
    contact1 = server.create('contact');
    contact2 = server.create('contact');

    address1 = server.create('address');
    address2 = server.create('address');

    server.create('contact-address', { contact: contact1, address: address1 });
    server.create('contact-address', { contact: contact1, address: address2 });

    server.create('contact-address', { contact: contact2, address: address1 });
    server.create('contact-address', { contact: contact2, address: address2 });
  }
});

test("I can view a contact's list of addresses", function(assert) {
  assert.expect(4);

  visit('/1');

  andThen(function() {
    assert.equal(find(`div.address:contains('${address1.street}')`).length, 1, 'Address street is rendered');
    assert.equal(find(`div.address:contains('${address2.street}')`).length, 1, 'Address street is rendered');
  });

  visit('/2');

  andThen(function() {
    assert.equal(find(`div.address:contains('${address1.street}')`).length, 1, 'Address street is rendered');
    assert.equal(find(`div.address:contains('${address2.street}')`).length, 1, 'Address street is rendered');
  });
});

