import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('word-smith.blog-post').get('comments');
  }
});
