import { ActiveModelSerializer, Collection } from 'ember-cli-mirage';

export default ActiveModelSerializer.extend({
  include: ['addresses'],
  addresses(contact) {
    let models = contact.contactAddresses.models.map((ca) => ca.address);
    return new Collection('address', models);
  }
});

