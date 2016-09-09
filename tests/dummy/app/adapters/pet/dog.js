import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  buildURL() {
    return '/pets/dogs';
  }
});
