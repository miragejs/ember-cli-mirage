---
title: Route handlers
version: v0.2.0-beta.1
---

You define route handlers using the four verb methods (`get`, `post`, `put` and `del`). You can use shorthands, return a plain object, or write custom function handlers.

The status code defaults to the following, based on the verb being used for the route:

  - GET is 200
  - PUT is 204
  - POST is 201
  - DEL is 204

PUT and POST change to 200 if there is a response body.

## Shorthands

```js
this.verb(path, shorthand[, responseCode]);
```

*shorthand* can either be a string, an array, or `undefined`, depending on which shorthand you're using. View [the reference](../shorthands) for all available shorthands.

Examples:

```js
this.get('/api/authors');
this.put('/api/authors/:id');
this.del('/posts/:id');
```

## Object handler

```js
this.verb(path, object[, responseCode]);
```

*object* is a POJO that's returned for this route.

Example:

```js
this.get('/api/authors/current', { id: 1, name: 'Link' });
this.get('/some/secret', { message: 'unauthorized' }, 404);
```

## Function handler

Write a custom function to handle this route.

```js
this.verb(path, (schema, request) => {
  // your code
}[, responseCode]);
```

The function handler you define takes two parameters, **schema** (your Mirage server's ORM) and **request** (the Pretender request object). Consult [the schema's API](../schema) for how to interact with your models (or the database directly) and [Pretender's docs](https://github.com/trek/pretender) for more info on the request object.

If the data returned from your handler is a JavaScript object or array, it will be stringified and sent as the response body of your request:

```js
this.get('/api/events', () => {
  let events = [];

  for (var i = 0; i < 100; i++) {
    events.push({
      id: i,
      value: Math.random() * 100
    });
  };

  return events; // will be JSON.stringified by Mirage
});
```

You can also return an instance of `Mirage.Response` to dynamically set headers and the status code:

```js
this.post('/api/messages', ({message}, request) => {
  var params = JSON.parse(request.requestBody);

  if (!params.title) {
    return new Mirage.Response(422, { some: 'header' }, { errors: { title: ['cannot be blank']}});
  } else {
    return message.create(params);
  }
});
```

If you return a string, it will not be `JSON.stringified`, so you can mock out responses other than JSON.

## External origins

You can use Mirage to mock out other-origin requests. By default, a mock like

```js
this.get('/contacts', ...)
```

will hit the same origin that's serving your Ember app. To mock out a different origin, add the fully qualified domain name to your mock:

```js
this.get('http://api.twitter.com/v1', ...)
```

If your entire Ember app uses an external (other-origin) API, you can globally configure the domain via `urlPrefix`:

```js
// mirage/config.js
this.urlPrefix = 'https://my.api.com';

// This mock will handle requests to https://my.api.com/contacts
this.get('/contacts', ...)
```
