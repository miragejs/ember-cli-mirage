import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class extends JSONAPISerializer {
  appSerializer = true;

  // I do not know why I had to make these two lines to get the home-test to pass
  keyForAttribute(key) {
    return key;
  }
  keyForRelationship(key) {
    return key;
  }
}
