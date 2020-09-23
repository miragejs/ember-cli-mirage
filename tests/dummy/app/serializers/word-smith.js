 import RestSerializer from '@ember-data/serializer/rest';

export default RestSerializer.extend({
  attrs: {
    address: "addressId",
    blogPosts: {deserialize: "records"}
  }
});
