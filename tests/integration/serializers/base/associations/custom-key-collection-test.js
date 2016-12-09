// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import Serializer from 'ember-cli-mirage/serializer';
import { hasMany, belongsTo } from 'ember-cli-mirage';
import Schema from 'ember-cli-mirage/orm/schema';
import Model from 'ember-cli-mirage/orm/model';
import Db from 'ember-cli-mirage/db';
import SerializerRegistry from 'ember-cli-mirage/serializer-registry';
import { module, test } from 'qunit';

module('Integration | Serializers | Base | Associations | Custom Key', {
  beforeEach() {
    let db = new Db();
    this.schema = new Schema(db);
    this.schema.registerModels({
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

test(`it can embed a model with a belongs-to relationship with a custom key`, function(assert) {
  let BaseSerializer = Serializer.extend({ embed: true });

  let registry = new SerializerRegistry(this.schema, {
    application: BaseSerializer,
    blogPost: BaseSerializer.extend({
      embed: true,
      include: ['wordSmithee']
    })
  });

  let blogPost = this.schema.blogPosts.find(1);
  let result = registry.serialize(blogPost);

  assert.deepEqual(result, {
    blogPost: {
      id: '1',
      title: 'Lorem',
      wordSmithee: {
        age: 123,
        id: '1',
        name: 'Link'
      }
    }
  });
});

test(`it can sideload a model with a belongs-to relationship with a custom key`, function(assert) {
  let BaseSerializer = Serializer.extend({ embed: false });

  let registry = new SerializerRegistry(this.schema, {
    application: BaseSerializer,
    blogPost: BaseSerializer.extend({
      include: ['wordSmithee']
    })
  });

  let blogPost = this.schema.blogPosts.find(1);
  let result = registry.serialize(blogPost);

  assert.deepEqual(result, {
    blogPost: {
      id: '1',
      title: 'Lorem',
      wordSmitheeId: '1'
    },
    wordSmithees: [
      {
        id: '1',
        name: 'Link',
        age: 123 }
    ]
  });
});

test('it can embed a collection with a has-many relationship with a custom key', function(assert) {
  let BaseSerializer = Serializer.extend({ embed: true });
  let registry = new SerializerRegistry(this.schema, {
    application: BaseSerializer,
    wordSmith: BaseSerializer.extend({
      attrs: ['id', 'name'],
      include: ['draftBlogPosts']
    })
  });

  let link = this.schema.wordSmiths.find(1);
  let result = registry.serialize(link);

  assert.deepEqual(result, {
    wordSmith: {
      draftBlogPosts: [
        {
          id: '1',
          title: 'Lorem'
        },
        {
          id: '2',
          title: 'Ipsum'
        }
      ],
      id: '1',
      name: 'Link'
    }
  });
});

test('it can sideload a collection with a has-many relationship with a custom key', function(assert) {
  let BaseSerializer = Serializer.extend({ embed: false });

  let registry = new SerializerRegistry(this.schema, {
    application: BaseSerializer,
    wordSmith: BaseSerializer.extend({
      attrs: ['id', 'name'],
      include: ['draftBlogPosts']
    })
  });

  let link = this.schema.wordSmiths.find(1);
  let result = registry.serialize(link);

  assert.deepEqual(result, {
    draftBlogPosts: [
      {
        id: '1',
        title: 'Lorem',
        wordSmitheeId: '1'
      },
      {
        id: '2',
        title: 'Ipsum',
        wordSmitheeId: '1'
      }
    ],
    wordSmith: {
      draftBlogPostIds: [
        '1',
        '2'
      ],
      id: '1',
      name: 'Link'
    }
  });
});
