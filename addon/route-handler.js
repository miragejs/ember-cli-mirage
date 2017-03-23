import Ember from 'ember';
import { MirageError } from 'ember-cli-mirage/assert';
import Response from './response';
import FunctionHandler from './route-handlers/function';
import ObjectHandler from './route-handlers/object';
import GetShorthandHandler from './route-handlers/shorthands/get';
import PostShorthandHandler from './route-handlers/shorthands/post';
import PutShorthandHandler from './route-handlers/shorthands/put';
import DeleteShorthandHandler from './route-handlers/shorthands/delete';
import HeadShorthandHandler from './route-handlers/shorthands/head';

const { RSVP, isBlank, typeOf } = Ember;

function isNotBlankResponse(response) {
  return response
    && !(typeOf(response) === 'object' && Object.keys(response).length === 0)
    && (Array.isArray(response) || !isBlank(response));
}

const DEFAULT_CODES = { get: 200, put: 204, post: 201, 'delete': 204 };

function createHandler({ verb, schema, serializerOrRegistry, path, rawHandler, options }) {
  let handler;
  let args = [schema, serializerOrRegistry, rawHandler, path, options];
  let type = typeOf(rawHandler);

  if (type === 'function') {
    handler = new FunctionHandler(...args);
  } else if (type === 'object') {
    handler = new ObjectHandler(...args);
  } else if (verb === 'get') {
    handler = new GetShorthandHandler(...args);
  } else if (verb === 'post') {
    handler = new PostShorthandHandler(...args);
  } else if (verb === 'put' || verb === 'patch') {
    handler = new PutShorthandHandler(...args);
  } else if (verb === 'delete') {
    handler = new DeleteShorthandHandler(...args);
  } else if (verb === 'head') {
    handler = new HeadShorthandHandler(...args);
  }
  return handler;
}

export default class RouteHandler {

  constructor({ schema, verb, rawHandler, customizedCode, options, path, serializerOrRegistry }) {
    this.verb = verb;
    this.customizedCode = customizedCode;
    this.serializerOrRegistry = serializerOrRegistry;
    this.handler = createHandler({ verb, schema, path, serializerOrRegistry, rawHandler, options });
  }

  handle(request) {
    return RSVP
      .resolve(request) // convert to a promise

      .then(request => RSVP.hash({
        request,
        response: this._handleReqeust(request)
      }))

      .then(({request, response}) => RSVP.hash({
        request,
        mirageResponse: this._toMirageResponse(response)
      }))

      .then(({request, mirageResponse}) =>
        this.serialize(mirageResponse, request).toRackResponse()
      )

      .catch(error => this._throw(request, error));
  }

  _handleReqeust(request) {
    if (this.handler instanceof FunctionHandler) {
      this.handler.setRequest(request);
    }

    return this.handler.handle(request);
  }

  _throw(request, error) {
    if (error instanceof MirageError) {
      throw error;
    } else {
      let message = (typeOf(error) === 'string') ? error : error.message;
      throw new MirageError(`Your handler for the url ${request.url} threw an error: ${message}`);
    }
  }

  _toMirageResponse(response) {
    if (!(response instanceof Response)) {
      let code = this._getCodeForResponse(response);
      response = new Response(code, {}, response);
    }

    return response;
  }

  _getCodeForResponse(response) {
    let code;
    if (this.customizedCode) {
      code = this.customizedCode;
    } else {
      code = DEFAULT_CODES[this.verb];
      if (code === 204 && isNotBlankResponse(response)) {
        code = 200;
      }
    }
    return code;
  }

  serialize(mirageResponse, request) {
    mirageResponse.data = this.serializerOrRegistry.serialize(mirageResponse.data, request);
    return mirageResponse;
  }
}
