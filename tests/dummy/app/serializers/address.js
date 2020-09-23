import RestSerializer from '@ember-data/serializer/rest';

export default RestSerializer.extend({
  primaryKey: "addressId"
});
