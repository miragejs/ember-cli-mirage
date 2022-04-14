/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Model, hasMany, belongsTo } from 'miragejs';
import { createServer } from 'miragejs';
import { EmberDataSerializer } from 'ember-cli-mirage';

module('Unit | Serializer | ember data serializer', function (hooks) {
  setupTest(hooks);

  let server;
  let address, wordSmith;

  hooks.beforeEach(function () {
    server = createServer({
      environment: 'test',
      models: {
        address: Model.extend({
          wordSmith: belongsTo(),
        }),
        wordSmith: Model.extend({
          blogPosts: hasMany(),
          address: belongsTo(),
        }),
        blogPost: Model.extend({
          wordSmith: belongsTo(),
        }),
      },
      serializers: {
        application: EmberDataSerializer,
        wordSmith: EmberDataSerializer,
        blogPost: EmberDataSerializer,
      },
    });

    address = server.create('address', {
      id: '11',
      street: '123 maple',
    });

    wordSmith = server.create('word-smith', {
      id: 1,
      name: 'Zelda',
      age: 230,
      address: address,
    });

    server.create('blog-post', {
      id: 2,
      wordSmith: wordSmith,
    });
  });

  hooks.afterEach(function () {
    server.shutdown();
  });

  test('it renames the properties', function (assert) {
    server.config({
      serializers: {
        wordSmith: EmberDataSerializer.extend({
          transforms: {
            name: 'externalName',
            address: { key: 'addressId', serialize: 'ids' },
            age: { key: 'externalAge' },
            blogPosts: { key: 'blogPostIds' },
          },
        }),
      },
    });

    let json = server.serializerOrRegistry.serialize(wordSmith);

    assert.deepEqual(json, {
      wordSmith: {
        addressId: '11',
        externalAge: 230,
        blogPostIds: ['2'],
        id: '1',
        externalName: 'Zelda',
      },
    });
  });

  test('it embeds the properties that are relations', function (assert) {
    server.config({
      serializers: {
        wordSmith: EmberDataSerializer.extend({
          transforms: {
            address: { key: 'address', serialize: 'records' },
            blogPosts: { key: 'blogPosts', serialize: 'records' },
          },
        }),
        address: EmberDataSerializer.extend({
          transforms: {
            wordSmith: 'wordSmithId',
          },
        }),
        blogPost: EmberDataSerializer.extend({
          transforms: {
            wordSmith: 'wordSmithId',
          },
        }),
      },
    });

    let json = server.serializerOrRegistry.serialize(wordSmith);

    assert.deepEqual(json, {
      wordSmith: {
        address: { id: '11', street: '123 maple', wordSmithId: '1' },
        age: 230,
        blogPosts: [{ id: '2', wordSmithId: '1' }],
        id: '1',
        name: 'Zelda',
      },
    });
  });

  test('it honors the includes option', function (assert) {
    server.config({
      serializers: {
        wordSmith: EmberDataSerializer.extend({
          include: ['address'],
        }),
        address: EmberDataSerializer.extend({
          transforms: {
            wordSmith: 'wordSmithId',
          },
        }),
      },
    });

    let json = server.serializerOrRegistry.serialize(wordSmith);
    assert.deepEqual(json, {
      wordSmith: {
        address: '11',
        age: 230,
        blogPosts: ['2'],
        id: '1',
        name: 'Zelda',
      },
      address: [{ id: '11', street: '123 maple', wordSmithId: '1' }],
    });
  });
});
