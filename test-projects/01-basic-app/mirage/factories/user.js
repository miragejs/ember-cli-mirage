import { Factory } from 'miragejs';
import faker from 'faker';

export default Factory.extend({

  age() {
    return faker.random.number({ min: 32, max: 32 });
  }

});
