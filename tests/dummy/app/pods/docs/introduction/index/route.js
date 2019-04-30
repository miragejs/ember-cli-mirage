import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel() {
    this.transitionTo('docs.introduction.what-is-mirage');
  }

});
