/* global requirejs */
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import ENV from 'basic-app/config/environment';

export default Controller.extend({
  wifi: service(),

  environment: ENV.environment,

  mirageModules: computed(function() {
    return Object.keys(requirejs.entries)
      .filter(key => key.match('^ember-cli-mirage'));
  }),

  otherIncludedModules: computed(function() {
    return Object.keys(requirejs.entries)
      .filter(key => {
        return key.match('^pretender') || key.match('^lodash') || key.match('initializers/ember-cli-mirage');
      });
  })

});
