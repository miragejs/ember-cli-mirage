import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Controller.extend({

  store: service(),

  createUser: action(function (event) {
    event.preventDefault();

    let name = this.get('newName');

    this.get('store')
      .createRecord('user', { name })
      .save()
      .then(() => {
        this.set('newName', '');
      });
  }),

  updateUser: action(function (user, event) {
    event.preventDefault();

    user.save();
  }),

  deleteUser: action(function  (user, event) {
    event.preventDefault();

    user.destroyRecord();
  }),

});
