import Ember from 'ember';
import shorthandHandlers from 'ember-cli-mirage/shorthands/index';
import Response from './response';

const { isArray, isBlank, typeOf, keys } = Ember;
const defaultCodes = {
  get: 200,
  put: 204,
  post: 201,
  'delete': 204
};

export default {

  handle: function(verb, handler, db, request, customizedCode, options) {
    var code, isEmptyObject;
    var handlerMethod = this._lookupHandlerMethod(verb, handler);
    var response = handlerMethod(handler, db, request, options);

    if (response instanceof Response) {
      return response.toArray();

    } else {
      if (customizedCode) {
        code = customizedCode;
      } else {
        code = defaultCodes[verb];
        isEmptyObject = typeOf(response) === 'object' && keys(response).length === 0;
        if (code === 204 && response && !isEmptyObject && (isArray(response) || !isBlank(response))) {
          code = 200;
        }
      }

      if (response) {
        return [code, {"Content-Type": "application/json"}, response];
      } else {
        return [code, {}, undefined];
      }

    }
  },

  _lookupHandlerMethod: function(verb, handler) {
    var type = typeof handler;
    type = isArray(handler) ? 'array' : type;

    var handlerMethod;

    if (type === 'function' || type === 'object') {
      handlerMethod = this['_' + type + 'Handler'];
    } else {
      handlerMethod = shorthandHandlers[verb][type];
    }

    return handlerMethod;
  },

  _functionHandler: function(handler, db, request) {
    var data;

    try {
      data = handler(db, request);
    } catch(error) {
      console.error('Mirage: Your custom function handler for the url ' + request.url + ' threw an error:', error.message, error.stack);
    }

    return data;
  },

  _objectHandler: function(object /*, db, request*/) {
    return object;
  }

};
