---
layout: docs
title: Defining routes
---

To define routes for your server, use the `get`, `post`, `put` and `del` methods. Here's an example:

```js
// app/mirage/config.js
this.get('/api/users', function() {
  return ['Link', 'Zelda', 'Epona'];
})
```

Now, when your Ember app makes a GET request to `/api/users`, it will receive this data.

Each verb method has the same signature. The first argument is the path (URL) and the second is the actual function handler that returns the response:

<p class='u-callout'>this.<strong>verb</strong>( <em>path</em>, <em>handler</em> )</p>

Here's some more examples:

```js
this.get('/users/current', function() {
  return {
    name: 'Zelda',
    email: 'z@hyrule.org'
  };
});

this.get('/events', function() {
  var events = [];
  for (var i = 1; i < 1000; i++) {
    events.push({id: i, value: Math.random()});
  };

  return events;
});
```

## Dynamic data

In the examples above, we wrote the response data directly in the route. Instead of doing this, Mirage provides a simple in-memory database you can use to make your routes more versatile.

The database is injected into each route handler as the first parameter:

```js
this.get('/api/users', function(db) {
  return db.users.all();
})
```

<aside class='Docs-page__aside'>
  <p>Route handlers can also create, update and delete database records.</p>
</aside>

Now, Mirage will respond to this route with all the `user` records in its database. To seed your database with data, you'll use [fixtures]() (in development) or [factories]() (in testing).

As long as all your Mirage routes read from and write to the database, interactions will persist during a single session. This lets users interact with your app as if it were wired up to a real server.

## Dynamic paths and query params

<aside class='Docs-page__aside'>
  <p>Mirage uses Pretender.js to intercept HTTP requests, so confer <a href='#'>its docs</a> for more details on the request object.</p>
</aside>

A request object is also injected into each handler, as the second parameter. This object contains data associated with the request, like dynamic route segments and query params.
 
To define a route that has a dynamic segment, use colon syntax (`:segment`) in your path. The dynamic piece will be available via `request.params.[segment]`:

```js
this.get('/api/users/:id', function(db, request) {
  var id = request.params.id;

  return db.users.find(id);
})
```

Query params from the request can also be accessed via `request.params.[param]`.

Data that's included in the message body of the request is accessible via `request.requestBody`. For example, if your app creates a user resource via a POST request that includes some JSON data, your route handler may look like this:

```js
this.post('/api/users', function(db, request) {
  var attrs = JSON.parse(request.requestBody);
  var user = db.users.insert(attrs);
  return user;
})
```

View [Pretender's docs]() to see the full API for the request object. 

## Dynamic responses

By default, Mirage sets the response code of a response based on the HTTP verb being used. 

---

That's the essentials of defining your routes. Fortunately, JSON APIs tend to follow similar conventions, which lets us dramatically simplify our server definition. Read on to learn about using *shorthands*.
