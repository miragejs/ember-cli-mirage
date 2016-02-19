---
title: Working with JSON API
version: v0.1.x
---

Now that the JSON:API spec has hit 1.0 and Ember Data has adopted it as a default, it's important to be able to mock it out with Mirage. We're taking this opportunity to make Mirage a bit more flexible to handle JSON:API and other backends by adding a serializer layer.

Until this layer lands, you'll have to do a bit more work in your route definitions to work with JSON:API. For a GET request to `/users/1`, JSON:API expects a response that looks something like this:

```js
{
  "data": {
    "type": "users",
    "id": "1",
    "attributes": {
      "first-name": "Sam",
      "last-name": "Selikoff"
    }
  }
}
```

To mock this out in Mirage, first be sure that your factory uses hyphenated keys, so your db field names match the expected format:

```js
//mirage/factories/user.js
import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'first-name'() { return faker.name.firstName(); },
  'last-name'() { return faker.name.lastName(); }
});
```

Then, write your route handler. It may look something like this:

```js
this.get('/users/:id', function(db, request) {
  let id = request.params.id;

  return {
    data: {
      type: 'users',
      id: id,
      attributes: db.users.find(id)
    }
  };
})
```

A response for a collection (GET `/users`) may look like this:

```js
this.get('/users', function(db, request) {
  return {
    data: db.users.map(attrs => (
      { type: 'users', id: attrs.id, attributes: attrs }
    ))
  };
})
```

---

For now, mocking a JSON:API backend with Mirage requires a bit more work, but soon the serializer layer and updated shorthands will make things much simpler.
