import SerializerRegistry from 'ember-cli-mirage/serializer-registry';
import Serializer from 'ember-cli-mirage/serializer';
import schemaHelper from '../schema-helper';
import { module, test } from 'qunit';

module('Integration | Serializers | Base | Synthetic Attrs', function(hooks) {
  hooks.beforeEach(function() {
    this.schema = schemaHelper.setup();
    this.registry = new SerializerRegistry(this.schema, {
      wordSmith: Serializer.extend({
        syntheticAttrs: {
          foo() {
            return 'bar';
          },
          foo2(model) {
            return `${model.name}-foo2`;
          }
        }
      })
    });
  });

  hooks.afterEach(function() {
    this.schema.db.emptyData();
  });

  test(`it includes synthetic attrs when serializing a model`, function(assert) {
    let wordSmith = this.schema.wordSmiths.create({
      id: 1,
      name: 'Link',
      age: 123
    });

    let result = this.registry.serialize(wordSmith);
    assert.deepEqual(result, {
      wordSmith: {
        id: '1',
        name: 'Link',
        age: 123,
        foo: 'bar',
        foo2: 'Link-foo2'
      }
    });
  });

  test(`it includes synthetic attrs when serializing a collection`, function(assert) {
    let { schema } = this;
    schema.wordSmiths.create({ id: 1, name: 'Link', age: 123 });
    schema.wordSmiths.create({ id: 2, name: 'Zelda', age: 456 });

    let collection = this.schema.wordSmiths.all();
    let result = this.registry.serialize(collection);

    assert.deepEqual(result, {
      wordSmiths: [
        { id: '1', name: 'Link', age: 123, foo: 'bar', foo2: 'Link-foo2' },
        { id: '2', name: 'Zelda', age: 456, foo: 'bar', foo2: 'Zelda-foo2' }
      ]
    });
  });

  module('when attrs are also specified', function(hooks) {
    hooks.beforeEach(function() {
      this.registry = new SerializerRegistry(this.schema, {
        wordSmith: Serializer.extend({
          attrs: ['name'],
          syntheticAttrs: {
            foo() {
              return 'bar';
            },
            foo2(model) {
              return `${model.name}-foo2`;
            }
          }
        })
      });
    });

    test(`it includes whitelisted attrs and synthetic attrs`, function(assert) {
      let wordSmith = this.schema.wordSmiths.create({
        id: 1,
        name: 'Link',
        age: 123
      });

      let result = this.registry.serialize(wordSmith);
      assert.deepEqual(result, {
        wordSmith: {
          name: 'Link',
          foo: 'bar',
          foo2: 'Link-foo2'
        }
      });
    });
  });
});
