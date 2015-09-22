---
title: Server configuration
version: v0.0.28
---

Besides defining your routes, there's some config options for your server available in `/app/mirage/config.js`. There's also some environment options, which you define in `/config/environment.js`.

## Server config

<a name="namespace" href="#namespace">#</a> this.<b>namespace</b>

Set the base namespace used for all routes defined with `get`, `post`, `put` or `del`. For example,

```js
// app/mirage/config.js
export default function() {

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

Be aware that the `passthrough`-option wil currently only work with jQuery versions >= 2.x. See this [issue](https://github.com/pretenderjs/pretender/issues/85) for details.

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
