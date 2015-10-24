---
title: Quickstart
version: v0.2.x
---

Mirage is all about mocking out your API server. You define *route handlers* to respond to your Ember app's AJAX requests.

Here's a simple example of a handler:

```js
// app/mirage/config.js
export default function() {

  this.get('/api/authors', () => {
    return {
      authors: [
        {id: 1, name: 'Zelda'},
        {id: 2, name: 'Link'},
        {id: 3, name: 'Epona'},
      ]
    };
  });

}
```

Now whenever your Ember app makes a GET request to `/api/authors`, Mirage will respond with this data.

## Dynamic mocks

This works, and is traditionally how HTTP mocking is done - but hard-coded responses like this have a few problems:

   - *They're inflexible*. What if you want to change this route's response data in your tests?
   - *They contain formatting logic*. Logic that formats the shape of your JSON payload (e.g., including the root `authors` key) is now duplicated across all your mock routes.
   - *They're too basic.* Inevitably, when your mocks need to deal with more complex things like relationships, these simple ad hoc responses start to break down.

Mirage provides some primitives that let you write more flexible, powerful mocks. Let's see how they work by replacing our basic mock above.

First, let's define an `author` model:

```js
// app/mirage/models/author.js
import { Model } from 'ember-cli-mirage';

export default Model;
```

This definition creates an `authors` table in Mirage's *in-memory database*. The database enables our mocks to be dynamic, and lets us change the return data without rewriting the entire mock. In this way, we can share a single set of mocks in both development and in each test we write.

So, let's update our route handler to be dynamic:

```js 
this.get('/api/authors', (schema, request) => {
  return schema.author.all();
});
```

Now, this route will respond with all the authors in Mirage's database at the time of the request. If we want to change the data this route responds with, we simply need to change the data in the database.

## Creating data

<aside class='Docs-page__aside'>
  <p>You can also use flat fixture files to seed your database. Learn more in the <a href="../seeding-your-database">database guide</a>.</p>
</aside>

To actually seed our database with fake data, we'll use *factories*. Factories are objects that dynamically generate data - think of them as blueprints for your models.

You create factories by adding files under `/mirage/factories/`:

```js
// app/mirage/factories/author.js
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return `Person ${i}`; },
  age: 28,
  admin: false,
  avatar(i) { return faker.internet.avatar(); }
});
```

The name of your factory should match the name of your model. This factory will create objects like

```
{
  name: 'Person 1',
  age: 28,
  admin: false,
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg'
},
{
  name: 'Person 2',
  age: 28,
  admin: false,
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nemanjaivanovic/128.jpg'
}
```

and so on.

When you use a factory, the data is inserted into the corresponding database table, and each record gets a unique `id`. Your route handlers can then access and modify these records.

To actually use a factory, use the `server.create` and `server.createList` methods in development

```js
// app/mirage/scenarios/default.js

export default function(server) {
  server.createList('author', 10);
};
```

and in your acceptance tests

```js
// tests/acceptance/authors-test.js

test("I can view the authors", function() {
  var authors = server.createList('author', 3);

  visit('/authors');

  andThen(function() {
    equal( find('li').length, 3 );
    equal( find('li:first').text(), authors[0].name );
  });
});
```

You now have a simple way to set up your mock server's initial data, both during development and on a per-test basis.

## Associations

Dealing with associations is always tricky, and writing mocks for endpoints that deal with associations is no exception. Fortunately, Mirage ships with an ORM to help keep your mocks clean.

Let's say your author has many posts. By declaring the relationship

```js
// app/mirage/models/author.js
import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  posts: hasMany()
});

// app/mirage/models/post.js
import { Model } from 'ember-cli-mirage';

export default Model;
```

you now have an author model that knows about its posts. This can be useful when writing mocks:

```js
this.post('/authors/:id/posts', (schema, request) {
  let author = schema.author.find(request.params.id);

  return author.createPost();
})
```

or when using factories to create related data:

```js
let author = server.create('author');

author.createPost({title: 'My first post'});
author.createPost({title: 'My second post'});
```

Mirage also has a serializer layer, which is aware of your relationships. This is useful to mock endpoints that sideload related data:

```js
// mirage/serializers/author.js
import { Serializer } from 'ember-cli-mirage';

export default Serializer.extend({
  relationships: ['comments']
});
```

## Shorthands

<aside class='Docs-page__aside'>
  <p>View more <a href="../shorthands">shorthands</a>.</p>
</aside>

Mirage provides numerous *shorthands* to reduce the code needed for conventional API routes. For example, the route

```js
this.get('/authors', function(schema, request) {
  return {
    authors: schema.author.all()
  };
});
```

can be written as

```js
this.get('/authors');
```

There are also shorthands for `put`, `post` and `del` methods. Here's a full set of resourceful routes for an `author` resource:

```js
this.get('/authors');
this.get('/authors/:id');
this.post('/authors');
this.put('/authors/:id');
this.del('/authors/:id');
```

Shorthands make writing your server definition concise, so you should use them whenever possible. You can always fall back to a custom function when you need more control.

---

That should be enough to get you started! Keep reading to learn more.
