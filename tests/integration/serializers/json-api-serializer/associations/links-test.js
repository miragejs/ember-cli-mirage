import SerializerRegistry from "ember-cli-mirage/serializer-registry";
import {
  Server,
  Model,
  hasMany,
  belongsTo,
  JSONAPISerializer,
  ActiveModelSerializer
} from "ember-cli-mirage";
import { module, test } from "qunit";
import Db from "ember-cli-mirage/db";
import Schema from "ember-cli-mirage/orm/schema";

module(
  "Integration | Serializers | JSON API Serializer | Associations | Links",
  function(hooks) {
    hooks.beforeEach(function() {
      this.schema = new Schema(new Db(), {
        wordSmith: Model.extend({
          blogPosts: hasMany()
        }),
        blogPost: Model.extend({
          wordSmith: belongsTo(),
          fineComments: hasMany()
        }),
        fineComment: Model.extend({
          blogPost: belongsTo()
        })
      });
    });

    hooks.afterEach(function() {
      this.schema.db.emptyData();
    });

    test(`it supports links`, function(assert) {
      let registry = new SerializerRegistry(this.schema, {
        application: JSONAPISerializer,
        blogPost: JSONAPISerializer.extend({
          links(model) {
            return {
              wordSmith: {
                related: `/api/word_smiths/${model.wordSmith.id}`,
                self: `/api/blog_posts/${model.id}/relationships/word_smith`
              },
              fineComments: {
                related: `/api/fine_comments?blog_post_id=${model.id}`,
                self: `/api/blog_posts/${model.id}/relationships/fine_comments`
              }
            };
          }
        })
      });

      let link = this.schema.wordSmiths.create({ id: 3, name: "Link" }); // specify id to really test our links function
      let blogPost = link.createBlogPost({ title: "Lorem ipsum" });

      let result = registry.serialize(blogPost);

      assert.deepEqual(result, {
        data: {
          type: "blog-posts",
          id: blogPost.id,
          attributes: {
            title: "Lorem ipsum"
          },
          relationships: {
            "word-smith": {
              links: {
                related: `/api/word_smiths/${link.id}`,
                self: `/api/blog_posts/${blogPost.id}/relationships/word_smith`
              }
            },
            "fine-comments": {
              links: {
                related: `/api/fine_comments?blog_post_id=${blogPost.id}`,
                self: `/api/blog_posts/${blogPost.id}/relationships/fine_comments`
              }
            }
          }
        }
      });
    });

    test(`it supports links alongside data linkage`, function(assert) {
      let ApplicationSerializer = JSONAPISerializer.extend({
        alwaysIncludeLinkageData: true
      });
      let registry = new SerializerRegistry(this.schema, {
        application: ApplicationSerializer,
        blogPost: ApplicationSerializer.extend({
          links(model) {
            return {
              wordSmith: {
                related: `/api/word_smiths/${model.wordSmith.id}`,
                self: `/api/blog_posts/${model.id}/relationships/word_smith`
              },
              fineComments: {
                related: `/api/fine_comments?blog_post_id=${model.id}`,
                self: `/api/blog_posts/${model.id}/relationships/fine_comments`
              }
            };
          }
        })
      });

      let link = this.schema.wordSmiths.create({ id: 3, name: "Link" }); // specify id to really test our links function
      let blogPost = link.createBlogPost({ title: "Lorem ipsum" });

      let result = registry.serialize(blogPost);

      assert.deepEqual(result, {
        data: {
          type: "blog-posts",
          id: blogPost.id,
          attributes: {
            title: "Lorem ipsum"
          },
          relationships: {
            "word-smith": {
              data: {
                id: "3",
                type: "word-smiths"
              },
              links: {
                related: `/api/word_smiths/${link.id}`,
                self: `/api/blog_posts/${blogPost.id}/relationships/word_smith`
              }
            },
            "fine-comments": {
              data: [],
              links: {
                related: `/api/fine_comments?blog_post_id=${blogPost.id}`,
                self: `/api/blog_posts/${blogPost.id}/relationships/fine_comments`
              }
            }
          }
        }
      });
    });

    test("[regression] it works when using a named serializer, relationships, and a non-JSONAPISerializer for the base", async function(assert) {
      let server = new Server({
        environment: "test",
        serializers: {
          application: ActiveModelSerializer,
          userV2: JSONAPISerializer
        },

        models: {
          user: Model.extend({
            posts: hasMany()
          }),
          post: Model.extend()
        },

        baseConfig() {
          this.get("/users", function(schema) {
            let json = this.serialize(schema.users.find(1), "userV2");

            return json;
          });
        }
      });

      server.create("user");

      let res = await fetch("/users");
      let json = await res.json();

      assert.deepEqual(json, {
        data: {
          attributes: {},
          id: "1",
          type: "users"
        }
      });

      server.shutdown();
    });
  }
);
