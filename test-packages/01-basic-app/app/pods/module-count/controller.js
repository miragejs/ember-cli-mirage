/* global requirejs */
import Controller from '@ember/controller';
import ENV from 'basic-app/config/environment';

export default class extends Controller {
  environment = ENV.environment;

  get mirageModules() {
    return Object.keys(requirejs.entries).filter((key) =>
      key.match('^ember-cli-mirage'),
    );
  }

  get otherIncludedModules() {
    return Object.keys(requirejs.entries).filter((key) => {
      return (
        key.match('^pretender') ||
        key.match('^lodash') ||
        key.match('initializers/ember-cli-mirage')
      );
    });
  }
}
