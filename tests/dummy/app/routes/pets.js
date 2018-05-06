import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    createPet() {
      let controller = this.controllerFor('pets');
      let name = controller.get('petName');
      let alive = controller.get('isAlive');
      controller.set('petName', '');
      controller.set('isAlive', false);
      this.store.createRecord('pet', { name, alive });
    }
  },

  setupController(controller, model) {
    if (this.error) {
      controller.set('error', this.error);
    } else {
      controller.set('model', model);
    }
    controller.set('isAlive', false);
  },

  model() {
    return this.store.findAll('pet').catch((reason) => {
      let errorMsg = reason.responseJSON ? reason.responseJSON.errors[0] : reason.errors[0];
      this.set('error', errorMsg);
    });
  }
});
