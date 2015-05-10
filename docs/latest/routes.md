---
layout: docs
title: Routes
---

The four verb methods (`get`, `post`, `put` and `del`) are the primary way you define routes and interact with your database. There are many shorthands available to make your server definition more succinct, and ideally most of your config will use them. Check out the [shorthands guide](../using-shorthands) for more examples.

You can always fall back to a function and manipulate the data in the database however you need to via the [database's api](Database). Finally, you can simply return a POJO if you don't need to interact with the database.

Here's the full definition:

```js
this.verb(path, handler[, responseCode]);
```
where *verb* is `get`, `put`, `post`, or `delete`, and

- **path**: string. The URL you're defining, e.g. `/api/contacts` (or `/contacts` if `namespace` is defined).
- **handler**: shorthand, function or object.

    As a shorthand, either a string, an array or undefined. Consult [the shorthand docs](../using-shorthands) for the various shorthand definitions.

    As a function, takes two parameters, *db*, your Mirage server's database, and *request*, which is the Pretender request object. Consult [the database's API]() for how to interact with the db. Return the data you want as plain JS - it will be stringified and sent as the response body to your request. You can also return an instance of `Mirage.Response` to dynamically set headers and the status code, as seen in the [routes guide](../defining-routes).

    As an object, the data returned from the request.

- **responseCode**: number. optional. The response code of the request.
