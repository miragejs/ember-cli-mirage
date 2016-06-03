import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  street: faker.address.streetAddress
});
