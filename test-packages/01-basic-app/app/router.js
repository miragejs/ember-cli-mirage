import EmberRouter from '@ember/routing/router';
import config from 'basic-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('module-count');
  this.route('crud-demo');
});
