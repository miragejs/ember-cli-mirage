---
title: Models
version: v0.4.x
---


Models wrap your database and allow you to define relationships.

<aside class='Docs-page__aside'>
  <p>As a clarifying point, Mirage models know nothing about your Ember application, including any Ember Data models you may have defined.</p>
</aside>

Define models by adding files under `/models`. These are automatically registered with `schema`, which is how you'll access your model classes in your route handlers.

Note - if you're using Ember Data and version 0.3.3 of Mirage or later, models will be detected and auto-generated for you in-memory, so you don't need to define the files yourself. 

---

## Defining Models

To define a model, use the generator:

```sh
ember g mirage-model blog-post
```

This creates a file under `/mirage/models`:

```js
// mirage/models/blog-post.js
import { Model } from 'ember-cli-mirage';

export default Model;
```

## Class methods

Access a model class using the `schema` object injected into your route handlers. For example, given the `blog-post` file above, you'd access the `BlogPost` class via `schema.blogPosts`:

```js
this.get('/blog_posts', (schema, request) => {
  return schema.blogPosts.all();
});
```

You can then invoke the model's class methods.

Use ES6 destructuring to add some sugar:

```js
this.get('/blog_posts', ({ blogPosts }, request) => {
  return blogPosts.all();
});
```

### new(*attrs*)

Create a new unsaved model instance with attributes *attrs*.

```js
let post = blogPosts.new({ title: 'Lorem ipsum' });
post.title;   // Lorem ipsum
post.id;      // null
post.isNew(); // true
```

### create(*attrs*)

Create a new model instance with attributes *attrs*, and insert it into the database.

```js
let post = blogPosts.create({title: 'Lorem ipsum'});
post.title;   // Lorem ipsum
post.id;      // 1
post.isNew(); // false
```

### all()

Return all models in the database.

```js
let posts = blogPosts.all();
// [post:1, post:2, ...]
```

### find(*id* or *ids*)

Return one or many models in the database by id.

```js
let post = blogPosts.find(1);
let posts = blogPosts.find([1, 3, 4]);
```

### findBy(*query*)

Returns the first model in the database that matches the key-value pairs in the `query` object. Note that a string comparison is used.

```js
let post = blogPosts.findBy({ published: true });
```

### first()

Returns the first model in the database.

```js
let post = blogPosts.first();
```

### where(*query*)

Return an array of models in the database matching the key-value pairs in *query*. Note that a string comparison is used.

```js
let posts = blogPosts.where({ published: true });
```

## Instance methods

These methods are available on your model instances.

### attrs

Returns the attributes of your model.

```js
let post = blogPosts.find(1);
post.attrs; // {id: 1, title: 'Lorem Ipsum', publishedAt: '2012-01-01 10:00:00'}
```

### save()

Create or saves the model.

```js
let post = blogPosts.new({ title: 'Lorem ipsum' });
post.id; // null

post.save();
post.id; // 1

post.title = 'Hipster ipsum'; // db has not been updated
post.save();                  // ...now the db is updated
```

### update(key, val)

Updates the record in the db.

```js
let post = blogPosts.find(1);
post.update('title', 'Hipster ipsum'); // the db was updated
post.update({
  title: 'Lorem ipsum',
  created_at: 'before it was cool'
});
```

### destroy()

Destroys the db record.

```js
let post = blogPosts.find(1);
post.destroy(); // removed from the db
```

### isNew()

Boolean, true if the model has not been persisted yet to the db.

```js
let post = blogPosts.new({title: 'Lorem ipsum'});
post.isNew(); // true
post.id;      // null

post.save();  // true
post.isNew(); // false
post.id;      // 1
```

### isSaved()

Boolean, opposite of `isNew`.

### reload()

Reload a model's data from the database.

```js
let post = blogPosts.find(1);
post.attrs;     // {id: 1, title: 'Lorem ipsum'}

post.title = 'Hipster ipsum';
post.title;     // 'Hipster ipsum';

post.reload();  // true
post.title;     // 'Lorem ipsum'
```

### toString()

Simple string representation of the model and id.

```js
let post = blogPosts.find(1);
post.toString(); // "model:blogPost:1"
```

## Associations

You can also define associations by using the `belongsTo` and `hasMany` helpers. Each helper adds some dynamic methods to your model.

*belongsTo*

```js
// mirage/models/blog-post.js
import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo()
});
```

This adds an `authorId` property to your `blogPost` model, as well as some methods for working with the associated `author` model:

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

*hasMany*

```js
// mirage/models/blog-post.js
import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  comments: hasMany()
});
```

This adds a `commentIds` property to the `blogPost` model, as well as some methods for working with the associated `comments` collection:

```js
blogPost.commentIds;                      // [1, 2, 3]
blogPost.commentIds = [2, 3];             // updates the relationship
blogPost.comments;                        // array of related comments
blogPost.comments = [comment1, comment2]; // updates the relationship
blogPost.newComment(attrs);               // new unsaved comment
blogPost.createComment(attrs);            // new saved comment (comment.blogPostId is set)
```

### Association options

*modelName*

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

*inverse*

Sometimes a `hasMany` relationship can point to a model with multiple associations of the same type. You can use the `inverse` option to specify which property on the related model is the inverse of the given relationship:

```js
// app/models/talk.js
export default Model.extend({
  primaryEvent: belongsTo('event'),
  secondaryEvent: belongsTo('event'),
});

// app/models/event.js
export default Model.extend({
  talks: hasMany('talk', { inverse: 'primaryEvent' }),
});
```

*polymorphic*

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

### Building associations

To create objects via factories that come with relationships (and related models) already built, you can use the `afterCreate()` hook when defining your factory. For details, check out the [factories documentation](../factories/#factories-and-relationships).
