import ENV from '../config/environment';
import userConfig from '../mirage/config';
import Server from 'ember-cli-mirage/server';
import readData from 'ember-cli-mirage/utils/read-data';
import readFactories from 'ember-cli-mirage/utils/read-factories';

export default {
  name: 'ember-cli-mirage',
  initialize: function(container, application) {
    var config = ENV['ember-cli-mirage'];
    var env = ENV.environment;
    var isForTests =  window.location.pathname.match('^/tests');
    var usingInDev = env === 'development' && isForTests;
    var usingInTest = env === 'test';
    var shouldUseServer = usingInDev || usingInTest || config.force;

    if (shouldUseServer) {
      var server = new Server({
        environment: env
      });

      server.loadConfig(userConfig);

      if (usingInDev || config.force) {
        var userData = readData(ENV.modulePrefix);
        server.loadData(userData);

      } else if (usingInTest) {

        var factoryMap = readFactories(ENV.modulePrefix);
        server.loadFactories(factoryMap);
      }
    }
  }
};
