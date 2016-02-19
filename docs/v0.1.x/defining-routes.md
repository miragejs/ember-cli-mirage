---
title: Defining routes
version: v0.1.x

redirect_from: "/docs/latest/defining-routes/"
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
    events.push({ id: i, value: Math.random()});
  };

  return events;
});
```

## Dynamic data

In the examples above, we wrote the response data directly in the route. Instead of doing this, Mirage provides a simple in-memory database you can use to make your routes more versatile.

The database is injected into each route handler as the first parameter:

```js
this.get('/api/users', function(db) {
  return db.users;
});
```

<aside class='Docs-page__aside'>
  <p>Route handlers can also create, update and delete database records.</p>
</aside>

Now, Mirage will respond to this route with all the `user` records in its database. You'll learn more about seeding your database with initial data in the next section.

As long as all your Mirage routes read from and write to the database, user interactions will persist during a single session. This lets users interact with your app as if it were wired up to a real server.

View the [full database API](../database) to see how your routes can interact with your data.

## Dynamic paths and query params

A request object is also injected into each handler, as the second parameter. This object contains data associated with the request, like dynamic route segments and query params.
 
To define a route that has a dynamic segment, use colon syntax (`:segment`) in your path. The dynamic piece will be available via `request.params.[segment]`:

```js
this.get('/api/users/:id', function(db, request) {
  var id = request.params.id;

  return db.users.find(id);
})
```

Query params from the request can also be accessed via `request.queryParams.[param]`.

Data that's included in the message body of the request is accessible via `request.requestBody`. For example, if your app creates a user resource via a POST request that includes some JSON data, your route handler may look like this:

```js
this.post('/api/users', function(db, request) {
  var attrs = JSON.parse(request.requestBody).user;
  var user = db.users.insert(attrs);
  return user;
});
```

Mirage uses Pretender.js to intercept HTTP requests, so check out [its docs](https://github.com/trek/pretender) to see the full API for the request object.

## Using shorthands

JSON APIs have become more standardized, so Mirage has the concept of *shorthands* to deal with common scenarios. These shorthands can replace many of your custom route handlers, dramatically simplifying your server definition.

For example, a GET request to `/api/users` typically returns a list of users. Instead of writing out the mock by hand

```js
this.get('/users', function(db, request) {
  return {
    users: db.users
  };
});
```

we can use the shorthand form

```js
this.get('/users');
```

Similarly, creating a resource manually looks like this

```js
this.post('/users', function(db, request) {
  var attrs = JSON.parse(request.requestBody).user;
  var user = db.users.insert(attrs);
  return user;
});
```

but with a shorthand it looks like this:

```js
this.post('/users');
```

View the [full reference](../shorthands) to see all available shorthands.


## Dynamic status codes and HTTP headers

By default, Mirage sets the HTTP code of a response based on the verb being used:
  
  - `get`, `put` and `del` are 200
  - `post` is 201


Additionally, a header for `Content-type` is set to `application/json`.

You can customize both the response code and headers by returning an instance of `Mirage.Response`:

```js
// app/mirage/config.js
import Mirage from 'ember-cli-mirage';

export default function() {
  this.post('/api/users', function(db, request) {
    var data = JSON.parse(request.requestBody).user;

    if (data.name) {
      return db.users.insert(data);
    } else {
      return new Mirage.Response(400, { some: 'header' }, { message: 'name cannot be blank' });
    }
  });
}
```

Be sure to `import Mirage from 'ember-cli-mirage'` at the top of your config file.


## Fully Qualified Routes

Mirage can be configured to respond to fully qualified URLs. For example:

```js
this.get('https://api.github.com/repos/samseilkoff/ember-cli-mirage/releases', function() {
    return [];
});
```
---

That's the essentials of defining your routes. Next, you'll learn how to seed your database with some starting data, both in development and within tests.
