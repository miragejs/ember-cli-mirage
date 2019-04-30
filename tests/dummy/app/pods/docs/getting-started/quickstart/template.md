# Quickstart

Mirage lets you simulate API responses by writing _route handlers_.

The simplest example of a route handler is a function that returns an object:

```js
// mirage/config.js
export default function() {
  this.namespace = 'api';

  this.get('/movies', () => {
    return {
      data: [
        { id: 1, type: 'movies', attributes: { name: 'Interstellar' } },
        { id: 2, type: 'movies', attributes: { name: 'Inception' } },
        { id: 3, type: 'movies', attributes: { name: 'Dunkirk' } },
      ]
    };
  });

}
```

Now whenever your Ember app makes a GET request to `/api/movies`, Mirage will respond with this data.

## Dynamic data

This works, and is a common way to simulate HTTP responses - but hard-coded responses like this have a few problems:

   - *They're inflexible*. What if you want to change the data for this route in your tests?
   - *They contain formatting logic*. Logic that's concerned with the shape of your JSON payload (e.g., the `data` and `attributes` keys) is now duplicated across all your route handlers.
   - *They're too basic.* Inevitably, when your fake server needs to deal with more complex things like relationships, these simple ad hoc responses start to break down.

Mirage provides primitives that let you write a more powerful server implementation. Let's see how they work by replacing our basic stub data above.

First, we'll need to tell Mirage that we have a dynamic `Movie` model.

If you're using Ember Data and you already have a `Movie` model defined, you can skip this next step! Mirage will automatically generate its models from your Ember Data definitions, so you won't have any files in the `mirage/models` directory.

If you're not using Ember Data, you can use the `mirage-model` generator to create a model from the command line:

```bash
$ ember g mirage-model movie
```

This generates the following file:

```js
// mirage/models/movie.js
import { Model } from 'ember-cli-mirage';

export default Model.extend({
});
```

Models let us take advantage of an _in-memory database_ in our route handlers. The database makes our route handlers dynamic, so we can change the data that's returned without having to entirely rewrite the handler.

Let's update our route handler to be dynamic:

```js
this.get('/movies', (schema, request) => {
  return schema.movies.all();
});
```

Now this route will respond with all the authors in Mirage's database at the time of the request. We can therefore change this route's response by only changing Mirage's database.

Right now, the response looks something like

```js
data: [
]
```

That's because Mirage's database is empty. Let's see how we can create some new models so our response is more interesting.


## Creating data

<aside class='Docs-page__aside'>
  <p>You can also use flat fixture files to seed your database. Learn more in the <a href="../seeding-your-database">database guide</a>.</p>
</aside>

To actually seed our database with fake data, we'll use *factories*. Factories are objects that dynamically generate data - think of them as blueprints for your models.

Let's create a factory for our author with

```sh
$ ember g mirage-factory author
```

We can then define some properties on our Factory. They can be simple types like Booleans, Strings or Numbers, or functions that return dynamic data:

```js
// mirage/factories/author.js
import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `Person ${i}`;
  },

  age: 28,

  admin() {
    return Math.random() > 0.5;
  }

});
```

This factory creates objects like

```javascript
[{
  name: 'Person 1',
  age: 28,
  admin: false
},
{
  name: 'Person 2',
  age: 28,
  admin: true
}]
```

and so on, which will automatically be inserted into the `authors` database table. The database will assign each record an `id`, and now we can interact with this data in our route handlers.

To use our new factory, we can call the `server.create` and `server.createList` methods in development:

```js
// mirage/scenarios/default.js
export default function(server) {

  server.createList('author', 10);

};
```

and in acceptance tests:

```js
// tests/acceptance/authors-test.js
test("I can view the authors", function() {
  let authors = server.createList('author', 3);

  visit('/authors');

  andThen(() => {
    equal(find('li').length, 3);
    equal(find('li:first').text(), authors[0].name);
  });
});
```

You now have a simple way to set up your fake server's initial data, both during development and on a per-test basis.

## Associations and serializers

Dealing with associations is always tricky, and faking endpoints that deal with associations is no exception. Fortunately, Mirage ships with an ORM to help keep your routes clean.

Let's say your author has many blog-posts. You can declare this relationship in your model:

```js
// mirage/models/author.js
import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  blogPosts: hasMany()
});

// mirage/models/blog-post.js
import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo()
});
```

Now Mirage knows about the relationship between these two models, which can be useful when writing route handlers:

```js
this.get('/authors/:id/blog-posts', (schema, request) => {
  let author = schema.authors.find(request.params.id);

  return author.blogPosts;
});
```

and when creating graphs of related data:

```js
test('I can see the posts on the homepage', function(assert) {
  let author = server.create('author');
  server.createList('post', 10, { author });

  visit('/');

  andThen(() => {
    assert.expect(find('li').length, 10);
  });
});
```

Mirage's serializer layer is also aware of your relationships, which helps when faking endpoints that sideload or embed related data. Models and Collections that are returned from a route handler pass through the serializer layer, where you can customize which attributes and associations to include, as well as override other formatting options:

```js
// mirage/serializers/application.js
import { Serializer } from 'ember-cli-mirage';

export default Serializer.extend({
  keyForAttribute(attr) {
    return dasherize(attr);
  },

  keyForRelationship(attr) {
    return dasherize(attr);
  },
});

// mirage/serializers/author.js
import { Serializer } from 'ember-cli-mirage';

export default Serializer.extend({
  include: ['blogPosts']
});

// mirage/config.js
export default function() {
  this.get('/authors/:id', (schema, request) => {
    return schema.authors.find(request.params.id);
  });
}
```

With the above config, a GET to `/authors/1` would return something like

```
/*
{
  author: {
    id: 1,
    'first-name': 'Zelda'
  },
  'blog-posts': [
    {id: 1, 'author-id': 1, title: 'Lorem ipsum'},
    ...
  ]
}
*/
```

Mirage ships with two named serializers, JSONAPISerializer and ActiveModelSerializer, to save you the trouble of writing this custom code yourself. See the [serializer guide](./api/modules/ember-cli-mirage/serializer~Serializer) to learn more.

## Shorthands

<aside class='Docs-page__aside'>
  <p>View more <a href="./advanced/shorthands">shorthands</a>.</p>
</aside>

Mirage has *shorthands* to reduce the code needed for conventional API routes. For example, the route handler

```js
this.get('/authors', (schema, request) => {
  return schema.authors.all();
});
```

can be written as

```js
this.get('/authors');
```

There are also shorthands for `put` (or `patch`), `post` and `del` methods. Here's a full set of resourceful routes for an `author` resource:

```js
this.get('/authors');
this.get('/authors/:id');
this.post('/authors');
this.put('/authors/:id'); // or this.patch
this.del('/authors/:id');
```

Shorthands make writing your server definition concise, so you should use them whenever possible. You can always fall back to a custom function when you need more control.

## Passthrough

Mirage is a great tool to use even if you're working on an existing app, or if you don't want to fake your entire API. By default, Mirage throws an error if your Ember app makes a request that doesn't have a corresponding route handler defined. To avoid this, tell Mirage to let unhandled requests pass through:

```js
// mirage/config.js
this.passthrough();
```

Now you can develop as you normally would, for example against an existing API.

When it comes time to build a new feature, you don't have to wait for the API to be updated. Just define the new route that you need

```js
// mirage/config.js
this.get('/comments');

this.passthrough();
```

and you can fully develop and test the feature. In this way you can build up your fake server piece by piece - adding some solid acceptance tests along the way.

---

That should be enough to get you started! Keep reading to learn more.
