// This module implements a simple DSL for asserting that specific requests were made.
//
// ```
//   let requests = [ <Two GET XHRs, both made to '/posts'> ];
//
//   let it = dsl(requests);
//   it.received.delete.to('/posts'); // => 0
//   it.didNotReceive.get.to('/contacts'); // => true
//   it.received.request.to('/contacts'); // => 0
//   it.received.get.to(/\/contacts\/\d+\/); // => 0
//   it.received.put.to('/posts/5', { requestBody: { title: 'The Title' } }); // => 0
//   it.received.get.to('/posts'); // => 2
// ```
//
// received/didNotReceive
//   Indicates whether or not a matching request is expected. When using 'received',
//   an integer representing the number of matching requests will be returned. When
//   using 'didNotReceive', a boolean will be returned.
//
// get/post/put/delete/head/request
//   Specifies the expected HTTP method. If 'request' is used, all methods will be
//   matched.
//
// to
//   Specifies the URL, query parameters, headers, or any other values you wish to
//   check against. Either one or both of 'url' or 'params' must be provided.
//
//   param {(string,RegExp)} [url] - the url to match against
//   param {Object} params - an XHR-like object to check other properties against
//   returns {(Boolean|Number)}
//
import Ember from 'ember';
import _isPlainObject from 'lodash/lang/isPlainObject';
import _isMatch from 'lodash/lang/isMatch';
import _isNumber from 'lodash/lang/isNumber';

const { merge } = Ember;

// The catch-all value which is used to match all HTTP verbs
const ANY_HTTP_VERB = 'request';

export default function dsl(requests) {
  return {
    received:      buildMethodHash(true),
    didNotReceive: buildMethodHash(false)
  };

  function buildMethodHash(expectToFindMatch) {
    let methodObj = {};
    ['get', 'post', 'put', 'delete', 'head', ANY_HTTP_VERB].forEach(method => {
      Object.defineProperty(methodObj, method, {
        get() {
          return {
            to: to.bind(null, expectToFindMatch, method)
          };
        }
      });
    });
    return methodObj;
  }

  // toParams can be
  function to(expectToFindMatch, method, ...toParams) {
    let expected = buildExpected(method, toParams);
    let matches = requests.filter(actualRequest => requestIsMatch(actualRequest, expected));

    if (matches.length > 0) {
      return expectToFindMatch ? matches.length : false;
    } else {
      return !expectToFindMatch;
    }

    // Takes the parameters which are specified as a part of the DSL and uses them
    // to build an XHR-like object which can then be used for direct comparison.
    function buildExpected(method, toParams) {
      let url = null;
      if (typeof toParams[0] === 'string' || toParams[0] instanceof RegExp) {
        url = toParams[0];
      }

      let requestParams = null;
      if (_isPlainObject(toParams[0])) {
        requestParams = toParams[0];
      } else if (_isPlainObject(toParams[1])) {
        requestParams = toParams[1];
      }

      return merge({ method, url }, requestParams || {});
    }
  }
}

/**
 *
 * Determines whether an XHR's attributes match the expected attributes.
 *
 * @param {XMLHttpRequest} actual - the fake (or real) XHR
 * @param {Object} expected - an XHR-like object to check against
 * @protected
 * @returns {Boolean}
 */
function requestIsMatch(actual, expected) {
  return Object.keys(expected).every(expectedKey => keyValuesMatch(expectedKey));

  function keyValuesMatch(key) {
    // These custom comparison functions are used to verify the corresponding key values.
    let matchers = {
      method(actual, expected) {
        return expected === ANY_HTTP_VERB || // 'request' matches all HTTP verbs
          actual.toUpperCase() === expected.toUpperCase();
      },

      queryParams(actual, expected) {
        return _isMatch(actual, expected, castExpectedNumbersToStrings);

        // Since query parameters are always strings, we need to cast
        // any expected numbers to strings
        function castExpectedNumbersToStrings(actualValue, expectedValue) {
          if (_isNumber(expectedValue)) {
            return String(expectedValue) === actualValue;
          }
        }
      },

      // Compares only JSON or empty payloads
      requestBody(actual, expected) {
        let actualParsed;
        try {
          actualParsed = JSON.parse(actual);
        } catch (e) {}
        return _isMatch(actualParsed, expected);
      },

      url(actual, expected) {
        // remove query parameters from the URL, as they're compared separately
        let actualSansQPs = actual.replace(/\?.*$/, '');
        return !expected || // if no url is passed, then we don't care about it -- so consider it a match
          expected instanceof RegExp && expected.test(actualSansQPs) ||
          expected === actualSansQPs;
      }
    };

    let isMatch = matchers[key] || _isMatch;
    return isMatch(actual[key], expected[key]);
  }
}