import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('contact').catch((reason) => {
      let errorMsg = reason.responseJSON ? reason.responseJSON.errors[0] : reason.errors[0];

      this.set('error', errorMsg)
    });
  },

  setupController(controller, model) {
    if (this.error) {
      controller.set('error', this.error);
    } else {
      controller.set('model', model);
    }
  }
});
