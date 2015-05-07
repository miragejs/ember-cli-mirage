---
layout: docs
title: Quickstart
---

Mirage is all about mocking out your API server. You define *route handlers* to respond to your Ember app's AJAX requests.

Here's a simple example of a handler:

```js
// app/mirage/config.js
export default function() {

  this.get('/api/users', function() {
    return {
      users: [
        {id: 1, name: 'Zelda'},
        {id: 2, name: 'Link'},
        {id: 3, name: 'Epona'},
      ]
    }
  });

}
```

Now whenever your Ember app makes a GET request to `/api/users`, Mirage will respond with this array.

---

This works, and this is traditionally how HTTP mocking is done; but hard-coding fixture data directly into your route like this makes it inflexible. What if you want to see scenarios with different users, or want more control over the response data in your tests?

<aside class='Docs-page__aside'>
  <p>View the database's <a href="#">full API</a>.</p>
</aside>

So, instead of returning an array, let's make this route dynamic by responding with all the users in Mirage's database:

```js
// app/mirage/config.js
export default function() {

  this.get('/api/users', function(db, request) {
    return db.users.all();
  });

}
```

Now, if we want to change what data this route responds with, all we need to do is change the data in the database. There's a few ways we can do this.

<aside class='Docs-page__aside'>
  <p>Learn more about <a href="#">fixtures</a>.</p>
</aside>

In development, you add data to your database by adding files under the `/mirage/fixtures` directory. These files should export arrays of objects, like this:

```js
// app/mirage/fixtures/users.js
export default [
  {id: 1, name: 'Zelda'},
  {id: 2, name: 'Link'},
  {id: 3, name: 'Epona'},
]
```

These objects will be added to the `users` database table during development (since the filename was `users.js`). Now, the route we wrote above will respond with this data.

<aside class='Docs-page__aside'>
  <p>Learn more about <a href="#">factories</a>.</p>
</aside>

In acceptance testing, you use factories to create database data. Factories give you finer control over the data you create, which is useful for setting up state in your various tests.

You create factories by adding files under `/mirage/factories/`:

```js
// app/mirage/factories/user.js
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: i => `Person ${i}`
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

That should be enough to get you started! Continue reading to learn more.
