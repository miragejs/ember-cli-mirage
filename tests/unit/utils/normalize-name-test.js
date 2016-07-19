import { toDbCollectionName, toModelName } from 'ember-cli-mirage/utils/normalize-name';
import Inflector from 'ember-inflector';

import {module, test} from 'qunit';

module('Unit | Normalize name');

test('can convert Model name to DbCollection name', function(assert) {
  assert.equal(toDbCollectionName('test'), 'tests');
  assert.equal(toDbCollectionName('hard-test'), 'hardTests');
});

test('can convert DbCollection name to Model name', function(assert) {
  assert.equal(toModelName('tests'), 'test');
  assert.equal(toModelName('hardTests'), 'hard-test');
});

test('can convert Model name to DbCollection using custom inflector rules', function(assert) {
  Inflector.inflector.irregular('head-of-state', 'heads-of-state');
  assert.equal(toDbCollectionName('head-of-state'), 'headsOfState');
});

test('can convert DbCollection name to Model name using custom inflector rules', function(assert) {
  Inflector.inflector.irregular('head-of-state', 'heads-of-state');
  assert.equal(toModelName('headsOfState'), 'head-of-state');
});
