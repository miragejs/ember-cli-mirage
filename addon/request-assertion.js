/* * RequestAssertion implements a simple DSL for asserting that specific requests were made.
 * ```
 *   let it = new RequestAssertion(requests);
 *
 *   it.received.delete.to('/posts');
 *   it.didNotReceive.request.to('/contacts');
 *   it.received.get.to(/\/contacts\/\d+\/);
 *   it.received.put.to('/posts/5', { title: 'The Title' });
 *   it.received.post.with('/listing', { price: 5000 });
 *   it.didNotReceive.post.to('any');
 * ```
 *
 */
import _isPlainObject from 'lodash/lang/isPlainObject';

function requestMatches(request, verb, url, params) {
  return verbMatches(request, verb) &&
     urlMatches(request, url) &&
     paramsMatch(request, params);

  function verbMatches(request, expectedVerb) {
    return expectedVerb === 'request' || // 'request' matches all HTTP verbs
      request.method.toUpperCase() === expectedVerb.toUpperCase();
  }

  function urlMatches(request, expectedUrl) {
    let url = request.url.replace(/\?.*$/, ''); // remove query params
    return !expectedUrl || // if no url is passed, then we don't care -- so consider it a match
      expectedUrl === 'any' || // 'any' matches all urls
      expectedUrl instanceof RegExp && expectedUrl.test(url) ||
      expectedUrl === url;
  }

  function paramsMatch(request, expectedParams) {
    // if no params are passed, consider it a match
    if (!_isPlainObject(expectedParams)) {
      return true;
    }

    let actualParams;
    try {
      actualParams = JSON.parse(request.requestBody || NaN); // || NaN makes parse throw if requestBody is null
    } catch (e) {
      actualParams = request.queryParams;
    }

    return Object.keys(expectedParams).every(k => String(actualParams[k]) === String(expectedParams[k]));
  }
}

function to(requests, expectMatch, verb, ...toParams) {
  if (requests.length === 0) {
    return expectMatch === false;
  }

  let url = (typeof toParams[0] === 'string' || toParams[0] instanceof RegExp) && toParams[0] || null;
  let requestParams = _isPlainObject(toParams[0]) && toParams[0] || _isPlainObject(toParams[1]) && toParams[1];

  let foundMatch = requests.some(request => requestMatches(request, verb, url, requestParams));

  return foundMatch === expectMatch;
}

class Verb {
  constructor(requests, received) {
    ['get', 'post', 'put', 'delete', 'head', 'request'].forEach(verb => {
      Object.defineProperty(this, verb, {
        get() {
          let f = to.bind(null, requests, received, verb);
          return { to: f, with: f };
        }
      });
    });
  }
}

export default class RequestAssertion {
  constructor(requests = []) {
    this._requests = requests;
  }

  get received() {
    return new Verb(this._requests, true);
  }

  get didNotReceive() {
    return new Verb(this._requests, false);
  }
}

