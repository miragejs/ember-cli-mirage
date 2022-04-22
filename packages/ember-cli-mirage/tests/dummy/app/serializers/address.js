import RestSerializer from '@ember-data/serializer/rest';

export default class extends RestSerializer {
  primaryKey = 'addressId';
}
