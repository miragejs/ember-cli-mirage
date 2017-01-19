import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model() {
    let store = this.get('store');
    return store.findAll('user/profile');
  }

});
