import ENV from '../config/environment';
import baseConfig, { testConfig } from '../mirage/config';
import Server from 'ember-cli-mirage/server';
import createExpressMiddleware from 'ember-cli-mirage/interceptors/create-express-middleware';
import _assign from 'lodash/assign';

function startMirage(env, createInterceptor) {
  let environment = env.environment;
  let options = _assign({}, {environment, baseConfig, testConfig});

  return new Server(Object.assign({createInterceptor: createInterceptor}, options));
}

export default function(router, env) {
  var createInterceptor = function(server) {
    return createExpressMiddleware(server, router);
  };
  startMirage(env, createInterceptor);
}
