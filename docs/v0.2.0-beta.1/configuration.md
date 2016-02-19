---
title: Configuration
version: v0.2.0-beta.1

redirect_from: "/docs/latest/server-configuration/"
---

Besides defining your routes, there's some config options for your server available in `mirage/config.js`. There's also some environment options, which you define in `/config/environment.js`.

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

<a name="passthrough" href="#passthrough">#</a> this.**passthrough**(*path1*, *path2*..., *options*)

By default, if your Ember app maks a request that is not defined in your server config, Mirage will throw an error. You can use `passthrough` to whitelist requests, and allow them to pass through your Mirage server to the actual network layer.

<aside class='Docs-page__aside'>
  <p>Put all passthrough config at the bottom of your <code>config.js</code> file, to give your route handlers precedence.</p>
</aside>

To ignore paths on your current host (as well as configured `namespace`), use a leading `/`:

```js
this.passthrough('/addresses');
```

You can also pass a list of paths, or call `passthrough` multiple time:

```js
this.passthrough('/addresses', '/contacts');
this.passthrough('/something');
this.passthrough('/else');
```

These lines will allow all HTTP verbs to pass through. If you want only certain verbs to pass through, pass an array as the last argument with the specified verbs:

```js
this.passthrough('/addresses', ['post']);
this.passthrough('/contacts', '/photos', ['get']);
```

If you want all requests on the current domain to pass through, simply invoke the method with no arguments:

```js
this.passthrough();
```

Note again that the current namespace (i.e. any `namespace` property defined above this call) will be applied.

You can also allow other-origin hosts to passthrough. If you use a fully-qualified domain name, the `namespace` property will be ignored. Use two * wildcards to match all requests under a path:

```js
this.passthrough('http://api.foo.bar/**');
this.passthrough('http://api.twitter.com/v1/cards/**');
```

In versions of Pretender prior to 0.12, `passthrough` only worked with jQuery >= 2.x. As long as you're on Pretender@0.12 or higher, you should be all set.

<a name="loadFixtures" href="#loadFixtures">#</a> this.**loadFixtures**(*file1*, *file2*...)

By default, all the data files under `/fixtures` will be loaded during testing if you don't have factories defined, and during development if you don't have `/scenarios/default.js` defined. You can use `loadFixtures()` to also load fixture files in either of these environments, in addition to using factories to seed your database.

`server.loadFixtures()` loads all the files, and `server.loadFixtures(file1, file2...)` loads selective fixture files.

For example, in a test you may want to start out with all your fixture data loaded:

```js
test('I can view the photos', function() {
  server.loadFixtures();
  server.createList('photo', 10);

  visit('/');

  andThen(() => {
    equal( find('img').length, 10 );
  });
});
```

or in development, you may want to load a few reference fixture files, and use factories to define the rest of your data:

```js
// scenarios/default.js
export default function(server) {
  server.loadFixtures('countries', 'states');

  let author = server.create('author');
  server.createList('post', 10, { author_id: author.id });
}
```

<a name="pretender" href="#pretender">#</a> this.**pretender**

Mirage uses [pretender.js](https://github.com/trek/pretender) as its xhttp interceptor. In your Mirage config, `this.pretender` refers to the actual pretender instance, so any config options that work there will work here as well. By default, content returned is json stringified, so you can just return js objects.

Refer to [pretender's docs](https://github.com/trek/pretender#mutating-the-body) if you want to change this or any other options on your pretender instance.


<a name="testConfig" href="#testConfig">#</a> **testConfig**

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

<a name="directory" href="#directory">#</a> ENV['ember-cli-mirage'].<b>directory</b>

Configure which directory contains your Mirage server definition. The default directory is `/mirage` (from the root of your project).

For example, to have your server definition under `/app/mirage`,

```js
// config/environment.js
...
ENV['ember-cli-mirage'] = {
  directory: 'app/mirage'
}
```
