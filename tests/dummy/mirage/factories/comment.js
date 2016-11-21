import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  content() {
    return faker.hacker.phrase();
  }

});
