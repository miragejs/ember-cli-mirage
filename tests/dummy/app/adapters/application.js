import ActiveModelAdapter from 'active-model-adapter';
import Ember from 'ember';

export default ActiveModelAdapter.extend({
  pathForType(type) {
    return Ember.String.pluralize(Ember.String.dasherize(type));
  }
});
