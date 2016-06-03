import { ActiveModelSerializer, Collection } from 'ember-cli-mirage';

export default ActiveModelSerializer.extend({
  include: ['contacts'],
  contacts(contact) {
    let models = contact.contactAddresses.models.map((ca) => ca.contact);
    return new Collection('contact', models);
  }
});

