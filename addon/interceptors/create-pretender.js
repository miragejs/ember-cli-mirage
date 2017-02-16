/* eslint no-console: 0 */

import Pretender from 'pretender';
import assert from '../assert';

/**
 * Creates a new Pretender instance.
 *
 * @method createPretender
 * @param {Server} server
 * @return {Object} A new Pretender instance.
 * @public
 */
function createPretender(server) {
  let pretender = new Pretender(function() {
    this.passthroughRequest = function(verb, path, request) {
      if (server.shouldLog()) {
        console.log(`Passthrough request: ${verb.toUpperCase()} ${request.url}`);
      }
    };

    this.handledRequest = function(verb, path, request) {
      if (server.shouldLog()) {
        console.log(`Mirage: [${request.status}] ${verb.toUpperCase()} ${request.url}`);
        let { responseText } = request;
        let loggedResponse;

        try {
          loggedResponse = JSON.parse(responseText);
        } catch(e) {
          loggedResponse = responseText;
        }

        console.log(loggedResponse);
      }
    };

    this.unhandledRequest = function(verb, path) {
      path = decodeURI(path);
      assert(
        `Your Ember app tried to ${verb} '${path}',
         but there was no route defined to handle this request.
         Define a route that matches this path in your
         mirage/config.js file. Did you forget to add your namespace?`
      );
    };
  });
  server.pretender = pretender;
  return pretender;
}

export default createPretender;
