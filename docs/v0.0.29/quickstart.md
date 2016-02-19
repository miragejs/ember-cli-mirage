---
title: Quickstart
version: v0.0.29
---

Mirage is all about mocking out your API server. You define *route handlers* to respond to your Ember app's AJAX requests.

Here's a simple example of a handler:

```js
// app/mirage/config.js
export default function() {

  this.get('/api/users', function() {
    return {
      users: [
        { id: 1, name: 'Zelda' },
        { id: 2, name: 'Link' },
        { id: 3, name: 'Epona' },
      ]
    }
  });

}
```

Now whenever your Ember app makes a GET request to `/api/users`, Mirage will respond with this data.

---

This works, and this is traditionally how HTTP mocking is done; but hard-coding fixture data directly into your route like this makes it inflexible. What if you want to see scenarios with different users, or want more control over the response data in your tests?

<aside class='Docs-page__aside'>
  <p>View the full <a href="../database">database API</a>.</p>
</aside>

Instead of returning an array, let's make this route dynamic by responding with all the users in Mirage's in-memory database:

```js
this.get('/api/users', function(db, request) {
  return db.users;
});
```

Now, if we want to change what data this route responds with, all we need to do is change the data in the database. There's a few ways to do this.

<aside class='Docs-page__aside'>
  <p>Learn more about <a href="../seeding-your-database">fixtures</a>.</p>
</aside>

In development, you add data to your database by creating files under the `/mirage/fixtures` directory. These files should export arrays of objects, like this:

```js
// app/mirage/fixtures/users.js
export default [
  { id: 1, name: 'Zelda' },
  { id: 2, name: 'Link' },
  { id: 3, name: 'Epona' },
];
```

These objects will be added to the `users` database table, since the filename is `users.js`. Now, any route can retrieve this data via `db.users`, and we have a single place to manage our mock data.

<aside class='Docs-page__aside'>
  <p>Learn more about <a href="../seeding-your-database">factories</a>.</p>
</aside>

In acceptance testing, you use factories to create database data. Factories give you finer control over what data you create, which is useful for setting up initial state in your tests.

You create factories by adding files under `/mirage/factories/`:

```js
// app/mirage/factories/user.js
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Person ${i}`; }
});
```

Each time you create an object from this factory, it will insert a record into your `users` table, giving that record an id and a name of `Person 1`, `Person 2`, and so on.

To use your factories, use `server.create` or `server.createList` in a test:

```js
// tests/acceptance/users-test.js
test("I can view the users", function() {
  var users = server.createList('user', 3);

  visit('/users');

  andThen(function() {
    equal( find('li').length, 3 );
    equal( find('li:first').text(), users[0].name );
  });
});
```

---

<aside class='Docs-page__aside'>
  <p>View more <a href="#">shorthands</a>.</p>
</aside>

Mirage provides numerous *shorthands* to reduce the code needed for conventional API routes. For example, the route

```js
this.get('/api/users', function(db, request) {
  return db.users;
});
```

can be written simply as

```js
this.get('/api/users');
```

Creating a resource using the request payload is just as easy:

```js
this.post('/api/users');
```

Shorthands make writing your server definition concise, so you should use them whenever possible. You can always fall back to a custom function when you need more control.

---

That should be enough to get you started! Keep reading to learn more.
