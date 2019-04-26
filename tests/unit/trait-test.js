import { trait } from 'ember-cli-mirage';
import { module, test } from 'qunit';

module('Unit | Trait', function() {

  test('it can be empty', function(assert) {
    let t = trait();

    assert.deepEqual(t, { __isTrait__: true, extension: {} });

    t = trait({});

    assert.deepEqual(t, { __isTrait__: true, extension: {} });
  });

  test('it can receive attrs', function(assert) {
    let attrs = { foo: 'bar', baz: 'biz' };
    let t = trait(attrs);

    assert.deepEqual(t, {
      __isTrait__: true,
      extension: attrs
    });
  });

  test('it can be composed', function(assert) {
    let t = trait('a');

    assert.deepEqual(t, {
      __isTrait__: true,
      __isComposed__: true,
      extension: {},
      traits: ['a']
    });

    t = trait('b', {});

    assert.deepEqual(t, {
      __isTrait__: true,
      __isComposed__: true,
      extension: {},
      traits: ['b']
    });

    t = trait('a', 'b');

    assert.deepEqual(t, {
      __isTrait__: true,
      __isComposed__: true,
      extension: {},
      traits: ['a', 'b']
    });

    t = trait('a', 'b', {});

    assert.deepEqual(t, {
      __isTrait__: true,
      __isComposed__: true,
      extension: {},
      traits: ['a', 'b']
    });
  });

  test('it can be composed with overrides', function(assert) {
    let t = trait('a', { foo: 'bar' });

    assert.deepEqual(t, {
      __isTrait__: true,
      __isComposed__: true,
      extension: { foo: 'bar' },
      traits: ['a']
    });
  });

});
