---
title: Collections
version: v0.4.x
---

Collections represent arrays of [models](../models). They are returned by a `hasMany` [association](../models/#associations), or by one of the [ModelClass](../models/#class-methods) query methods:

```js
let posts = schema.blogPosts.all();
let posts = schema.blogPosts.find([1, 2, 4]);
let posts = schema.blogPosts.where({published: true});
```

## Instance properties

These properties are available on your collection instances.

### models

The plain array of models in this collection.

## Instance methods

These methods are available on your collection instances.

### modelName

Returns the dasherized model name of models in this collection.

```js
let posts = author.blogPosts.all();

posts.modelName; // "blog-post"
```

### update(key, val)

Updates each model in the collection (persisting immediately to the db).

```js
let posts = author.blogPosts.all();

posts.update('published', true); // the db was updated for all posts
```

### save()

Saves all models in the collection.

```js
let posts = author.blogPosts.all();

posts.models[0].published = true;

posts.save(); // all posts saved to db
```

### reload()

Reloads each model in the collection.

```js
let posts = author.blogPosts.all();

// ...

posts.reload(); // reloads data for each post from the db
```

### destroy()

Destroys the db record for all models in the collection.

```js
let posts = author.blogPosts.all();

posts.destroy(); // all posts removed from db
```

### sort(func)

Returns a new `Collection` with its `models` sorted according to the provided [compare function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters)

```js
let posts = author.blogPosts.all();

let postsByTitleAsc = posts.sort((a, b) => {
  return b.title < a.title;
});
```

### filter(func)

Returns a new `Collection` with only the `models` that pass the test implemented by the provided function.

```js
let posts = author.blogPosts.all();

let longPosts = posts.filter((postModel) => {
  return postModel.wordCount >= 1000;
});
```
