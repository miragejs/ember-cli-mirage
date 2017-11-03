/* global requirejs */
import readModules from 'ember-cli-mirage/utils/read-modules';
import { module } from 'qunit';
import test from 'ember-sinon-qunit/test-support/test';

module('Unit | Utility | read modules');

// Replace this with your real tests.
test('it returns the correct module map', function(assert) {
  assert.expect(1);

  this.stub(window, 'require').returns({
    default: 'hallo'
  });
  let originalEntries = requirejs.entries;

  requirejs.entries = {
    'foo/notmirage/bar': 'baz',
    'foo/mirage/factories/user': 'baz',
    'foo/mirage/factories/namespaced/user': 'baz',
    'foo/mirage/fixtures/train': 'baz',
    'foo/mirage/fixtures/namespaced/train': 'baz',
    'foo/mirage/scenarios/train': 'baz',
    'foo/mirage/scenarios/namespaced/train': 'baz',
    'foo/mirage/models/train': 'baz',
    'foo/mirage/models/namespaced/train': 'baz',
    'foo/mirage/serializers/train': 'baz',
    'foo/mirage/serializers/namespaced/train': 'baz',
    'foo/mirage/identity-managers/train': 'baz',
    'foo/mirage/identity-namespaced/managers/train': 'baz'
  };

  let expectedMap = {
    'factories': {
      'namespaced/user': 'hallo',
      'user': 'hallo'
    },
    'fixtures': {
      'namespaced/trains': 'hallo',
      'trains': 'hallo'
    },
    'identityManagers': {
      'train': 'hallo'
    },
    'models': {
      'namespaced/train': 'hallo',
      'train': 'hallo'
    },
    'scenarios': {
      'namespaced/train': 'hallo',
      'train': 'hallo'
    },
    'serializers': {
      'namespaced/train': 'hallo',
      'train': 'hallo'
    }
  };

  let result = readModules('foo');
  assert.deepEqual(result, expectedMap);
  requirejs.entries = originalEntries;
});
