/* * RequestAssertion implements a simple DSL for asserting that specific requests were made.
 * ```
 *   let requests = [ <Two GET requests, both made to '/posts'> ];
 *
 *   let it = new RequestAssertion(requests);
 *   it.received.delete.to('/posts'); // => 0
 *   it.didNotReceive.request.to('/contacts'); // => true
 *   it.received.get.to(/\/contacts\/\d+\/); // => 0
 *   it.received.put.to('/posts/5', { requestBody: { title: 'The Title' } }); // => 0
 *   it.received.get.to('/posts'); // => 2
 * ```
 *
 */
import Ember from 'ember';
import _isPlainObject from 'lodash/lang/isPlainObject';
import _isMatch from 'lodash/lang/isMatch';
import _isNumber from 'lodash/lang/isNumber';

const { merge } = Ember;

// Functions keyed by FakeXHR attribute keys which are used to compare actual vs expected values
// If comparing a key which does not having a corresponding comparator, then `_isMatch` is used (see `requestsMatch`)
const comparators = {
  method(actual, expected) {
    return expected === 'request' || // 'request' matches all HTTP verbs
      actual.toUpperCase() === expected.toUpperCase();
  },

  queryParams(actual, expected) {
    return _isMatch(actual, expected, castExpectedNumbersToStrings);

    function castExpectedNumbersToStrings(actualValue, expectedValue) {
      if (_isNumber(expectedValue)) {
        return String(expectedValue) === actualValue;
      }
    }
  },

  requestBody(actual, expected) {
    let actualParsed;
    try {
      actualParsed = JSON.parse(actual || undefined); // throw if requestBody is null
    } catch (e) {}
    return _isMatch(actualParsed, expected);
  },

  url(actual, expected) {
    let actualSansQPs = actual.replace(/\?.*$/, ''); // remove query params
    return !expected || // if no url is passed, then we don't care -- so consider it a match
      expected instanceof RegExp && expected.test(actualSansQPs) ||
      expected === actualSansQPs;
  }
};

function requestMatches(actualRequest, expectedRequest) {
  return Object.keys(expectedRequest).every(key => {
    if (comparators[key]) {
      return comparators[key](actualRequest[key], expectedRequest[key]);
    } else {
      return _isMatch(actualRequest[key], expectedRequest[key]);
    }
  });
}

function to(requests, expectToFindMatch, method, ...toParams) {
  if (requests.length === 0) {
    return !expectToFindMatch;
  }

  let url = (typeof toParams[0] === 'string' || toParams[0] instanceof RegExp) && toParams[0] || null;
  let requestParams = _isPlainObject(toParams[0]) && toParams[0] || _isPlainObject(toParams[1]) && toParams[1];

  let expectedRequest = merge({ method, url }, requestParams || {});
  let foundMatches = requests.filter(actualRequest => requestMatches(actualRequest, expectedRequest));

  if (expectToFindMatch) {
    return foundMatches.length;
  } else {
    return !foundMatches.length;
  }
}

class Method {
  constructor(requests, expectToFindMatch) {
    ['get', 'post', 'put', 'delete', 'head', 'request'].forEach(method => {
      Object.defineProperty(this, method, {
        get() {
          return { to: to.bind(this, requests, expectToFindMatch, method) };
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
    return new Method(this._requests, true);
  }

  get didNotReceive() {
    return new Method(this._requests, false);
  }
}

