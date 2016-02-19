---
title: Collections
version: v0.2.0-beta.4
---

Collections are essentially arrays of [models](../Models). They are returned by a `hasMany` [association](../models/#associations), or by one of the [ModelClass](../models/#class-methods) query methods:

```js
let posts = author.blogPosts;

let posts = schema.blogPost.all();
let posts = schema.blogPost.find([1, 2, 4]);
let posts = schema.blogPost.where({published: true});
```

## Instance methods

These methods are available on your collection instances.

### modelName

Returns the dasherized model name of models in this collection.

```js
let posts = author.blogPosts;

posts.modelName; // "blog-post"
```

### update(key, val)

Updates each model in the collection (persisting immediately to the db).

```js
let posts = author.blogPosts;

posts.update('published', true); // the db was updated for all posts
```

### save()

Saves all models in the collection.

```js
let posts = author.blogPosts;

posts[0].published = true;

posts.save(); // all posts saved to db
```

### reload()

Reloads each model in the collection.

```js
let posts = author.blogPosts;

// ...

posts.reload(); // reloads data for each post from the db
```

### destroy()

Destroys the db record for all models in the collection.

```js
let posts = author.blogPosts;

posts.destroy(); // all posts removed from db
```
