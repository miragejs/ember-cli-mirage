---
title: Models
version: v0.2.x
---


Models wrap your database and allow you to define relationships.

<aside class='Docs-page__aside'>
  <p>As a clarifying point, Mirage models know nothing about your Ember application, including any Ember Data models you have have defined.</p>
</aside>

Create models by adding files under `/models`. These will automatically be registered with `schema`, which is how you'll access your model classes in your route handlers.

---

## Defining Models

To define a model, use the generator:

```sh
ember g mirage:model blog-post
```

This creates a file under `/mirage/models`:

```js
// mirage/models/blog-post.js
import { Model } from 'ember-cli-mirage';

export default Model;
```

## Class methods

Access a model class using the `schema` object injected into your route handlers. For example, given the `blog-post` file above, you'd access the `BlogPost` class via `schama.blogPost`:

```js
this.get('/blog_posts', ({blogPost}, request) => {
  schema.blogPost.all();
});
```

You can then invoke the model's class methods.

### new(*attrs*)

Create a new unsaved model instance with attributes *attrs*.

```js
let post = schema.blogPost.new({title: 'Lorem ipsum'});
post.id;      // null
post.isNew(); // true
```

### create(*attrs*)

Create a new model instance with attributes *attrs*, and insert it into the database.

```js
let post = schema.blogPost.create({title: 'Lorem ipsum'});
post.id;      // 1
post.isNew(); // false
```

### all()

Return all models in the database.

```js
let posts = schema.blogPost.all();
// [post:1, post:2, ...]
```

### find(*id* or *ids*)

Return one or many models in the database by id.

```js
let post = schema.blogPost.find(1);
let posts = schema.blogPost.find([1, 3, 4]);
```

### where(*query*)

Return an array of models in the database matching the key-value pairs in *query*.

```js
let posts = schema.blogPost.where({published: true});
```

## Instance methods

These methods are available on your model instances.

### attrs

Returns the attributes of your model.

```js
let post = schema.blogPost.find(1);
post.attrs; // {id: 1, title: 'Lorem Ipsum', publishedAt: '2012-01-01 10:00:00'}
```

### save()

Create or saves the model.

```js
let post = schema.blogPost.new({title: 'Lorem ipsum'});
post.id; // null

post.save();
post.id; // 1

post.title = 'Hipster ipsum'; // db has not been updated
post.save();                  // now the db is updated
```

### update(key, val)

Updates the record in the db.

```js
let post = schema.blogPost.find(1);
post.update('title', 'Hipster ipsum'); // the db was updated
```

### destroy()

Destroys the db record.

```js
let post = schema.blogPost.find(1);
post.destroy(); // removed from the db
```

### isNew()

Boolean, true if the model has been persisted to the db.

```js
let post = schema.blogPost.new({title: 'Lorem ipsum'});
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
let post = schema.blogPost.find(1);
post.attrs;     // {id: 1, title: 'Lorem ipsum'}

post.title = 'Hipster ipsum';
post.title;     // 'Hipster ipsum';

post.reload();  // true
post.title;     // 'Lorem ipsum'
```

### toString()

Simple string representation of the model and id.

```js
let post = schema.blogPost.find(1);
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
blogPost.createAuthor(attrs);     // new saved author (updates blogPost.authorId)
```

*hasMany*

```js
// mirage/models/blog-post.js
import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  comments: hasMany()
});
```

This adds an `authorId` property to the `comment` model, as well as some methods for working with the associated `comments` collection:

```js
blogPost.commentIds;                      // [1, 2, 3]
blogPost.commentIds = [2, 3];             // updates the relationship
blogPost.comments;                        // array of related comments
blogPost.comments = [comment1, comment2]; // updates the relationship
blogPost.newComment(attrs);               // new unsaved comment
blogPost.createComment(attrs);            // new saved comment (comment.blogPostId is set)
```
