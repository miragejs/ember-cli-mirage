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

---

This works, and is traditionally how HTTP mocking is done - but hard-coded responses like this have some problems:

   - *They're inflexible*. What if you want to change this route's response data in your tests?
   - *They contain formatting logic*. Logic that formats the shape of your JSON payload (e.g., including the root `authors` key) is now duplicated across all your mock routes.
   - *They're too basic.* Inevitably, when your mocks need to deal with more complex things like relationships, these simple ad hoc responses start to break down.

Mirage provides some primitives that let you write more flexible, powerful mocks. Let's see how they work.

First, let's define an `author` model:

```js
// app/mirage/models/author.js
import { Model } from 'ember-cli-mirage';

export default Model;
```

This definition will set up an `authors` table in Mirage's *in-memory database*. The database is what enables our mock routes to be dynamic, allowing us to change the data being returned without having to rewrite the mock from scratch. In this way, we can use the same mock route in both our development and testing environments.

So, let's update our route handler to be dynamic:

```js 
this.get('/api/authors', (schema, request) => {
  return schema.author.all();
});
```

Now this route handler responds with all the authors in Mirage's database. If we want to change what data this route responds with, all we need to do is change the data in the database.

---

<aside class='Docs-page__aside'>
  <p>You can also use flat fixture files to seed your database. Learn more in the <a href="../seeding-your-database">database guide</a>.</p>
</aside>

To actually seed our database with fake data, we'll use *factories*. Factories are objects that dynamically generate data - think of them as blueprints for your models.

You create factories by adding files under `/mirage/factories/`:

```js
// app/mirage/factories/author.js
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
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

and so on. This data will be inserted into the `authors` database table, giving each record a unique `id`. The records will now be available to your route handlers.

To actually create factory data, use the `server.create` or `server.createList` methods in development

```js
// app/mirage/scenarios/default.js

// Create 10 non-admin and 1 admin authors for development
export default function(server) {
  server.createList('author', 10);  
  server.create('author', {admin: true});
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

---
<!--

<aside class='Docs-page__aside'>
  <p>View more <a href="../shorthands">shorthands</a>.</p>
</aside>

Mirage provides numerous *shorthands* to reduce the code needed for conventional API routes. For example, the route

```js
this.get('/authors', function(db, request) {
  return {
    authors: db.authors
  };
});
```

can be written simply as

```js
this.get('/authors');
```

There are also shorthands for `put`, `post` and `del` methods. Here's a full set of resourceful routes for a `author` resource:

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
 -->
