# Models

To take advantage of the ORM, Mirage needs to know about your application's models and their relationships. This section will teach you how to define and work with your models, and the next will discuss relationships.

**Note that if your Ember application uses Ember Data, Mirage will automatically discover your models and their relationships**, so you don’t need to define any files within Mirage yourself.

As a clarifying point, Mirage model instances only exist within Mirage's server, and are never shared directly with your Ember app or rendered directly in components. They exist solely to help you manage the data and relationships in your fake backend, but are serialized as a JSON string before they are sent over to your Ember app.

## Defining models

To define a model, you can use the generator:

```sh
ember g mirage-model blog-post
```

This creates a file under `/mirage/models`:

```js
// mirage/models/blog-post.js
import { Model } from 'ember-cli-mirage';

export default Model;
```

## Creating models

To create models, access the model's collection via the `schema` object, which is available in your route handlers:

```js
this.post('/blog-posts', function(schema) {
  let attrs = this.normalizedRequestAttrs();

  schema.blogPosts.create(attrs);
});
```

or as `server.schema` directly off of your Mirage server instance:

```js
// scenarios/default.js
export default function(server) {
  server.schema.blogPosts.create({ title: 'Lorem ipsum' });
}
```

Note that the collection is the pluralized form of the model's model name (the `models/blog-post.js` definition from above creates a `schema.blogPosts` collection).

Outside of route handlers, you'll typically create models using Factories via `server.create`

```js
// scenarios/default.js
export default function(server) {
  server.create('blog-post');
}
```

which delegates to the collection's `create` method under the hood. We'll talk more about creating data using Factories later in these guides.


## Accessing models

To access your models, use the various query methods from the model's collection.

For example, use `all()` to return all known models:

```js
this.get('/blog-posts', (schema, request) => {
  return schema.blogPosts.all();
});
```

Here are some other common query methods:

```js
schema.blogPosts.find(1);
schema.blogPosts.first();
schema.blogPosts.where({ isPublished: true });
schema.blogPosts.findBy({ title: 'Introduction' });
```

Check out the {{docs-link 'Schema API docs' 'docs.api.item' 'modules/lib/orm/schema~Schema'}} to see all available query methods.


## Updating and deleting models

Once you're working with an instance of a model, there are other properties and methods you'll have access to.

For example, you can update a model:

```js
let post = schema.blogPosts.find(1);

post.update({ author: 'Obi-Wan' });
```

or delete one:

```js
let post = schema.blogPosts.find(2);

post.destroy();
```

View the {{docs-link 'Model API docs' 'docs.api.item' 'modules/lib/orm/model~Model'}} to see all the available fields and methods for model instances.

---

Once your Models have been defined, the next step is to define the relationships between them, so you can really start to leverage the power of Mirage's ORM.

Let's talk about how to do that next.
