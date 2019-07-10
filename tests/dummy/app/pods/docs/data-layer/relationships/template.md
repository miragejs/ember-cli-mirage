# Relationships

Once you've defined your models, you can define relationships between them using the `belongsTo` and `hasMany` helpers. Each helper adds some dynamic methods to your model.

Just as another reminder, if you use Ember Data and have models and relationships defined there, you don't need to define any relationships within your Mirage folder, as those will be automatically discovered and set up for you.

## belongsTo

To define a to-one relationship, import the `belongsTo` helper and define a new property on a model that points to another model:

```js
// mirage/models/blog-post.js
import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo()
});
```

This defines a `belongsTo` relationship to an `Author` model.

The `belongsTo` helper adds several new properties and methods to your models.

In this case, our `blog-post` model would now have an `authorId` property, as well as some methods for working with the associated `author` model:

```js
blogPost.authorId;                // 1
blogPost.authorId = 2;            // updates the relationship
blogPost.author;                  // Author instance
blogPost.author = anotherAuthor;
blogPost.newAuthor(attrs);        // new unsaved author
blogPost.createAuthor(attrs);     // new saved author (updates blogPost.authorId in memory only)
```

Note that when a child calls `child.createParent`, the new parent is immediately saved to the `db`, but the child's foreign key is updated *on this instance only*, and is not immediately persisted to the database.

In other words, `blogPost.createAuthor` will create a new `author` record, insert it into the `db`, and update the `blogPost.authorId` in memory, but if you were to fetch the `blogPost` from the `db` again, the relationship would not be persisted.

To persist the new foreign key, you would call `blogPost.save()` after creating the new author.

## hasMany

To define a to-many relationship, use the `hasMany` helper:

```js
// mirage/models/blog-post.js
import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  comments: hasMany()
});
```

This helper adds a `commentIds` property to the `blogPost` model, as well as some methods for working with the associated `comments` collection:

```js
blogPost.commentIds;                      // [1, 2, 3]
blogPost.commentIds = [2, 3];             // updates the relationship
blogPost.comments;                        // array of related comments
blogPost.comments = [comment1, comment2]; // updates the relationship
blogPost.newComment(attrs);               // new unsaved comment
blogPost.createComment(attrs);            // new saved comment (comment.blogPostId is set)
```

## Association options

### modelName

If your associations model has a different name than the association itself, you can specify the `modelName` on the association.

For example,

```js
// mirage/models/blog-post.js
import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({

  author: belongsTo('user'),
  comments: hasMany('annotation')

});
```

would add all the named `author` and `comment` methods as listed above, but use `user` and `annotation` models for the actual relationships.

### inverse

Often, relationships can be inverses of each other.

For example, say we had the following two models:

```js
// blog-post.js
export default Model.extend({
  comments: hasMany()
});

// comment.js
export default Model.extend({
  blogPost: belongsTo()
});
```

In this case, `blogPost.comments` would point to a collection of Comment models, and each one of those Comment models would have a `comment.blogPost` relationship that pointed back to the original post.

Mirage will often be able to infer that two relationships on two different models are inverses of each other, but sometimes you'll need to be explicit. This typically happens if a model has two relationships that point to the same model type.

For example, suppose we had the following schema:

```js
// user.js
export default Model.extend({
  blogPosts: hasMany()
});

// blog-post.js
export default Model.extend({
  author: belongsTo('user'),
  reviewer: belongsTo('user')
});
```

In this case, Mirage doesn't know which relationship (`blogPost.author` or `blogPost.reviewer`) should by synchronized with the parent's `user.blogPosts` collection. So, you can specify which one by using the `inverse` option:

```js
// user.js
export default Model.extend({
  blogPosts: hasMany()
});

// blog-post.js
export default Model.extend({
  author: belongsTo('user', { inverse: 'blogPosts' }),
  reviewer: belongsTo('user', { inverse: null })
});
```

Now, if a blog post is added to `user.blogPosts`, that post's `author` will be correctly set.

### polymorphic

You can specify whether an association is a polymorphic association by passing `{ polymorphic: true }` as an option.

For example, say you have a `Comment` that can belong to a `BlogPost` or a `Picture`. Here's how the model definitions would look:

```js
// app/models/comment.js
export default Model.extend({
  commentable: belongsTo({ polymorphic: true })
});

// app/models/blog-post.js
export default Model.extend({
  comments: hasMany()
});

// app/models/picture.js
export default Model.extend({
  comments: hasMany()
});
```

Note that `commentable` doesn't need a type (there's no validation done on which types of models can exist on that association).

Polymorphic associations have slightly different method signatures for their foreign keys and build/create methods.

```js
let comment = schema.comments.create({ text: "foo" });

comment.buildCommentable('post', { title: 'Lorem Ipsum' });
comment.createCommentable('post', { title: 'Lorem Ipsum' });

// getter
comment.commentableId; // { id: 1, type: 'blog-post' }

// setter
comment.commentableId = { id: 2, type: 'picture' };
```

Has-many asssociations can also be polymorphic:

```js
// app/models/user.js
export default Model.extend({
  things: hasMany({ polymorphic: true })
});

// app/models/car.js
export default Model.extend({
});

// app/models/watch.js
export default Model.extend({
});

let user = schema.users.create({ name: "Sam" });

user.buildThing('car', { attrs });
user.createThing('watch', { attrs });

// getter
user.thingIds; // [ { id: 1, type: 'car' }, { id: 3, type: 'watch' }, ... ]

// setter
user.thingIds = [ { id: 2, type: 'watch' }, ... ];
```


---

Be sure to check out the {{docs-link 'Schema' 'docs.api.item' 'modules/lib/orm/schema~Schema'}}, {{docs-link 'Model' 'docs.api.item' 'modules/lib/orm/model~Model'}} and {{docs-link 'Collection' 'docs.api.item' 'modules/lib/orm/collection~Collection'}} API docs to learn about all the available ORM methods.

We'll also cover Serializers in these guides, where you'll learn how to customize the serialized forms of your models and collections to match your production API.

Next, let's take a look at Factories, which leverage your new Model and Relationship definitions to make it easy to create graphs of relational data.
