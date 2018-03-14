import { module, test } from 'qunit';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import SerializerRegistry from 'ember-cli-mirage/serializer-registry';
import { RestSerializer, Model, hasMany } from 'ember-cli-mirage';

module('Integration | Serializers | Rest Serializer | Serialize ids', function(hooks) {
  hooks.beforeEach(function() {
    this.schema = new Schema(new Db(), {
      wordSmith: Model.extend({
        blogPosts: hasMany(),
        specialPosts: hasMany('blog-post', { inverse: 'specialAuthor' })
      }),
      blogPost: Model
    });
  });

  hooks.afterEach(function() {
    this.schema.db.emptyData();
  });

  test(`if serializeIds is 'always' it serailizes the ides of all hasMany associations`, function(assert) {
    let ApplicationSerializer = RestSerializer;

    let registry = new SerializerRegistry(this.schema, {
      application: ApplicationSerializer,
      wordSmith: ApplicationSerializer.extend({
        serializeIds: 'always'
      })
    });

    let wordSmith = this.schema.wordSmiths.create({
      id: 1,
      name: 'Link'
    });
    wordSmith.createBlogPost();
    wordSmith.createBlogPost();
    wordSmith.createSpecialPost();

    let result = registry.serialize(wordSmith);

    assert.deepEqual(result, {
      wordSmith: {
        id: '1',
        name: 'Link',
        blogPosts: [
          { id: '1', type: 'blog-post' },
          { id: '2', type: 'blog-post' }
        ],
        specialPosts: [{ id: '3', type: 'blog-post' }]
      }
    });
  });
});