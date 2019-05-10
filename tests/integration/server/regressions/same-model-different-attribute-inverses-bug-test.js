import { module, test } from 'qunit';
import { Model, hasMany, belongsTo, JSONAPISerializer } from 'ember-cli-mirage';
import Server from 'ember-cli-mirage/server';
import promiseAjax from 'dummy/tests/helpers/promise-ajax';

module('Integration | Server | Regressions | same-model different-attribute inverses', function(hooks) {
  hooks.beforeEach(function() {
    this.server = new Server({
      environment: 'test',
      models: {
        user: Model.extend({
          authorings: hasMany('post', { inverse: 'author' }),
          editings: hasMany('post', { inverse: 'editor' })
        }),
        post: Model.extend({
          author: belongsTo('user', { inverse: 'authorings' }),
          editor: belongsTo('user', { inverse: 'editings' })
        })
      },
      serializers: {
        application: JSONAPISerializer.extend(),
        post: JSONAPISerializer.extend({
          include: ['author', 'editor', 'jortle']
        }),
        user: JSONAPISerializer.extend({
          include: ['authorings', 'editings']
        })
      },
      baseConfig() {
        this.resource('posts');
        this.resource('users');
      }
    });
  });

  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('it stores both relationships', async function(assert) {
    let post = this.server.create('post');
    let user = this.server.create('user');

    assert.expect(1);

    await promiseAjax({
      method: 'PATCH',
      url: `/posts/${post.id}`,
      contentType: 'application/vnd.api+json',
      data: JSON.stringify({
        data: {
          id: post.id,
          attributes: {},
          relationships: {
            author: {
              data: {
                type: 'users',
                id: user.id
              }
            },
            editor: {
              data: {
                type: 'users',
                id: user.id
              }
            }
          },
          type: 'posts'
        }
      })
    });

    let response = await promiseAjax({
      method: 'GET',
      url: `/users/${user.id}`
    });

    let json = response.data;

    assert.deepEqual(json.data,
      {
        "attributes": {},
        "id": "1",
        "relationships": {
          "authorings": {
            "data": [
              {
                "id": "1",
                "type": "posts"
              }
            ]
          },
          "editings": {
            "data": [
              {
                "id": "1",
                "type": "posts"
              }
            ]
          }
        },
        "type": "users"
      });
  });

});
