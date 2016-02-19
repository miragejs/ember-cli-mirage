---
title: Quickstart
version: v0.1.x

redirect_from: "/docs/latest/quickstart/"
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

This works, and this is traditionally how HTTP mocking is done - but hard-coding fixture data directly into your route like this makes it inflexible. What if you want to see scenarios with different users, or want more control over the response data in your tests?

<aside class='Docs-page__aside'>
  <p>View the full <a href="../database">database API</a>.</p>
</aside>

Instead of returning an array, let's make this route dynamic by responding with all the users in Mirage's in-memory database:

```js
this.get('/api/users', function(db, request) {
  return {
    users: db.users
  };
});
```

Now, if we want to change what data this route responds with, all we need to do is change the data in the database.

---

<aside class='Docs-page__aside'>
  <p>You can also use flat fixture files to seed your database. Learn more in the <a href="../seeding-your-database">database guide</a>.</p>
</aside>

To actually seed our database with fake data, we'll use *factories*. Factories are objects that dynamically generate data - think of them as blueprints for your database records.

You create factories by adding files under `/mirage/factories/`:

```js
// app/mirage/factories/user.js
import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Person ${i}`; },
  age: 28,
  admin: false,
  avatar(i) { return faker.internet.avatar(); }
});
```

This factory will create objects like

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

and so on. This data will be inserted into your `users` db table, giving each record a unique `id`. The records will now be available to your route handlers.

To actually create factory data, use the `server.create` or `server.createList` methods in development

```js
// app/mirage/scenarios/default.js

// Create 10 non-admin and 1 admin users for development
export default function(server) {
  server.createList('user', 10);  
  server.create('user', { admin: true });
};
```

and in your acceptance tests

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

You now have a simple way to set up your mock server's initial data, both during development and on a per-test basis.

---

<aside class='Docs-page__aside'>
  <p>View more <a href="../shorthands">shorthands</a>.</p>
</aside>

Mirage provides numerous *shorthands* to reduce the code needed for conventional API routes. For example, the route

```js
this.get('/users', function(db, request) {
  return {
    users: db.users
  };
});
```

can be written simply as

```js
this.get('/users');
```

There are also shorthands for `put`, `post` and `del` methods. Here's a full set of resourceful routes for a `user` resource:

```js
this.get('/users');
this.get('/users/:id');
this.post('/users');
this.put('/users/:id');
this.del('/users/:id');
```

Shorthands make writing your server definition concise, so you should use them whenever possible. You can always fall back to a custom function when you need more control.

---

That should be enough to get you started! Keep reading to learn more.
