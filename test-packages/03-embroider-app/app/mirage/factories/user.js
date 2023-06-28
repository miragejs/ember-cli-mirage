import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  age() {
    return faker.datatype.number({ min: 32, max: 32 });
  },
});
