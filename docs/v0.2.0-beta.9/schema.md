---
title: Schema
version: v0.2.0-beta.9
---

Mirage has an ORM which is managed through its Schema object. Assuming you've defined models for your server resources, `schema` will be passed into your route handlers as the first parameter:

```js
this.get('/authors', (schema, request) => {
  // work with schema
});
```

From here, you can access registered models, or the database directly.

<a name="database" href="#database">#</a> schema.<b>db</b>

Returns Mirage's database. See the [database docs](../database) for the db's API.

<a name="pluralizedModelClass" href="#pluralizedModelClass">#</a> schema.<b>pluralizedModelClass</b>

Return a registered model class. For example, given the file

```js
// mirage/models/blog-post.js
import { Model } from 'ember-cli-mirage';

export default Model;
```

you could invoke this model's class methods using `schema.blogPosts`:

```js
this.get('/blog-posts', (schema) => {
  return schema.blogPosts.all();
});
```

Use ES6 destructuring to add some sugar:

```js
this.get('/blog-posts', ({ blogPosts }) => {
  return blogPosts.all();
});
```

See the [model docs](../models) for all available class methods.
