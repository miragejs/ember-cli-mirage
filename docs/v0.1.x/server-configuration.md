---
title: Server configuration
version: v0.1.x

redirect_from: "/docs/latest/server-configuration/"
---

Besides defining your routes, there's some config options for your server available in `/app/mirage/config.js`. There's also some environment options, which you define in `/config/environment.js`.

## Server config

<a name="namespace" href="#namespace">#</a> this.<b>namespace</b>

Set the base namespace used for all routes defined with `get`, `post`, `put` or `del`.

For example,

```js
// app/mirage/config.js
export default function() {

  this.namespace = '/api';

  // this route will handle the URL '/api/contacts'
  this.get('/contacts', 'contacts');
};
```

Note that only routes defined after `this.namespace` are affected. This is useful if you have a few one-off routes that you don't want under your namespace:

```js
// app/mirage/config.js
export default function() {

  // this route handles /auth
  this.get('/auth', function() { /* ... */});
  
  this.namespace = '/api';
  // this route will handle the URL '/api/contacts'
  this.get('/contacts', 'contacts');
};
```

<a name="timing" href="#timing">#</a> this.<b>timing</b>

Set the timing parameter of the response. Default is a 400ms delay during development and 0 delay in testing (so your tests run fast).

```js
// app/mirage/config.js
export default function() {

  this.timing = 400; // default

};
```

<a name="pretender" href="#pretender">#</a> this.**pretender**

Mirage uses [pretender.js](https://github.com/trek/pretender) as its xhttp interceptor. in your mirage config, `this.pretender` refers to the actual pretender instance, so any config options that work there will work here as well. by default, content returned is json stringified, so you can just return js objects. 

```js
// app/mirage/config.js
export default function() {

  this.get('/api/v1', this.pretender.passthrough);
  
};
```

Refer to [pretender's docs](https://github.com/trek/pretender#mutating-the-body) if you want to change this or any other options on your pretender instance.

<a name="testConfig" href="#testConfig">#</a> **testConfig**

<aside class='Docs-page__aside'>
  <p>testConfig was added in version 0.1.2.</p>
</aside>

Export a named `testConfig` function to define routes that only apply in your test environment:

```js
// mirage/config.js

export default function() {
  // normal config, shared across development + testing
}

export function testConfig() {
  // test-only config, does not apply to development
}
```

This could be useful if you'd like use Mirage in testing, but generally proxy to an actual API during development. As you develop, your frontend may be ahead of your API, in which case you'd work with the routes in the default config, and write your tests. Then, once your API implements the new endpoints, you can move the routes to your testConfig, so your tests still run, but Mirage doesn't interfere during development.

## Environment options

<a name="enabled" href="#enabled">#</a> ENV['ember-cli-mirage'].<b>enabled</b>

By default, your Mirage server will run in test mode, and in development mode as long as the `--proxy` option isn't passed. To change this default behavior, set `enabled` to either true or false in your ENV config.

For example, to enable in production (e.g. to share a working prototype before your server is ready):

```js
// config/environment.js
...
if (environment === 'production') {
  ENV['ember-cli-mirage'] = {
    enabled: true
  }
}
```

To disable in development,

```js
// config/environment.js
...
if (environment === 'development') {
  ENV['ember-cli-mirage'] = {
    enabled: false
  }
}
```
