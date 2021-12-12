import { singularize, pluralize } from 'ember-cli-mirage/utils/inflector';

import {module, test} from 'qunit';

/*
  Keeping these tests here for now to avoid accidental breakage, but they are
  definitely a Ember Mirage thing, not a Mirage thing.
*/
module('Unit | Inflector', function() {
  test('can singularize', function(assert) {
    assert.strictEqual(singularize('tests'), 'test');
    assert.strictEqual(singularize('watches'), 'watch');
    assert.strictEqual(singularize('sheep'), 'sheep');
  });

  test('can pluralize', function(assert) {
    assert.strictEqual(pluralize('test'), 'tests');
    assert.strictEqual(pluralize('watch'), 'watches');
    assert.strictEqual(pluralize('sheep'), 'sheep');
  });
});
