import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import SerializerRegistry from 'ember-cli-mirage/serializer-registry';
import { Model, hasMany, belongsTo, JSONAPISerializer } from 'ember-cli-mirage';
import { module, test } from 'qunit';

module('Integration | Serializers | JSON API Serializer | Associations | Custom Key', {
  beforeEach() {
    this.schema = new Schema(new Db(), {
      wordSmith: Model.extend({
        draftBlogPosts: hasMany('blogPost', { inverse: 'wordSmithee' })
      }),
      blogPost: Model.extend({
        wordSmithee: belongsTo('wordSmith')
      })
    });

    let link = this.schema.wordSmiths.create({ name: 'Link', age: 123 });

    link.createDraftBlogPost({ title: 'Lorem' });
    link.createDraftBlogPost({ title: 'Ipsum' });

    this.schema.wordSmiths.create({ name: 'Zelda', age: 230 });
  },

  afterEach() {
    this.schema.db.emptyData();
  }
});

test(`it can serialize the relationship  for a model with a belongs-to relationship with a custom key`, function(assert) {
  let registry = new SerializerRegistry(this.schema, {
    application: JSONAPISerializer
  });

  let blogPost = this.schema.blogPosts.find(1);
  let result = registry.serialize(blogPost);

  assert.deepEqual(result, {
    'data': {
      'attributes': {
        'title': 'Lorem'
      },
      'id': '1',
      'relationships': {
        'word-smithee': {
          'data': {
            'id': '1',
            'type': 'word-smiths'
          }
        }
      },
      'type': 'blog-posts'
    }
  });
});

test(`it include the relationship for a model with a belongs-to relationship with a custom key`, function(assert) {
  let registry = new SerializerRegistry(this.schema, {
    application: JSONAPISerializer
  });

  let blogPost = this.schema.blogPosts.find(1);
  let request = {
    queryParams: {
      include: 'word-smithee'
    }
  };
  let result = registry.serialize(blogPost, request);

  assert.deepEqual(result, {
    'data': {
      'attributes': {
        'title': 'Lorem'
      },
      'id': '1',
      'relationships': {
        'word-smithee': {
          'data': {
            'id': '1',
            'type': 'word-smiths'
          }
        }
      },
      'type': 'blog-posts'
    },
    'included': [
      {
        'attributes': {
          'age': 123,
          'name': 'Link'
        },
        'id': '1',
        'relationships': {
          'draft-blog-posts': {
            'data': [
              { 'type': 'blog-posts', id: '1' },
              { 'type': 'blog-posts', id: '2' }
            ]
          }
        },
        'type': 'word-smiths'
      }
    ]
  });
});
