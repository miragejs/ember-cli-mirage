import RestSerializer from '@ember-data/serializer/rest';

export default class extends RestSerializer {
  attrs = {
    address: 'addressId',
    blogPosts: { deserialize: 'records' },
  };
}
