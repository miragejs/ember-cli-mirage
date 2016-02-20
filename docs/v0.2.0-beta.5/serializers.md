---
title: Serializers
version: v0.2.0-beta.5
---

Serializers are responsible for formatting your route handler's response.

The application serializer (`/mirage/serializers/application.js`) will apply to every response. To make specific customizations, define per-model serializers (e.g. `/mirage/serializers/blog-post.js`).

Any Model or Collection returned from a route handler will pass through the serializer layer. Highest priority will be given to a model-specific serializer, then the application serializer, then the default serializer.

Mirage ships with two named serializers. Use **JsonApiSerializer** to mock out JSON:API compliant servers:

```js
// mirage/serializers/application.js
import JsonApiSerializer from 'ember-cli-mirage/serializers/json-api-serializer';

export default JsonApiSerializer;
```

Use **ActiveModelSerializer** to mock out Rails backends that use AMS-style responses:

```js
// mirage/serializers/application.js
import ActiveModelSerializer from 'ember-cli-mirage/serializers/active-model-serializer'

export default ActiveModelSerializer;
```

Additionally, Mirage has a basic Serializer class which you can customize using the hooks documented below:

```js
// mirage/serializers/application.js
import { Serializer } from 'ember-cli-mirage';

export default Serializer;
```

When writing model-specific serializers, remember to extend from your application serializer:

```js
// mirage/serializers/blog-post.js
import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['comments']
});
```

---

## serialize(*response, request*)

Override this method to implement your own custom serialize function. *response* is whatever was returned from your route handler, and *request* is the Pretender request object.

Returns a plain JavaScript object or array, which Mirage uses as the response data to your Ember app's XHR request.

You can also override this method, call super, and manipulate the data before Mirage responds with it. This is a great place to add metadata, or for one-off operations that don't fit neatly into any of Mirage's other abstractions:

```js
serialize(object, request) {
  // This is how to call super, as Mirage borrows [Backbone's implementation of extend](http://backbonejs.org/#Model-extend)
  let json = Serializer.prototype.serialize.apply(this, arguments);

  // Add metadata, sort parts of the response, etc.

  return json;
}
```

## normalize(json)

This method is used by the POST and PUT shorthands. These shorthands expect a valid JSON:API document as part of the request, so that they know how to create or update the appropriate resouce. The *normalize* method allows you to transform your request body into a JSON:API document, which lets you take advantage of the shorthands when you otherwise may not be able to.

Note that this method is a noop if you're using JSON:API already, since request payloads sent along with POST and PUT requests will already be in the correct format.

Take a look at the included [ActiveModelSerializer's normalize method](https://github.com/samselikoff/ember-cli-mirage/blob/master/addon/serializers/active-model-serializer.js#L22) for an example.

---

## attrs

Use this property on a model serializer to whitelist attributes that will be used in your JSON payload.

For example, if you had a `blog-post` model in your database that looked like

```
{
  id: 1,
  title: 'Lorem ipsum',
  created_at: '2014-01-01 10:00:00',
  updated_at: '2014-01-03 11:42:12'
}
```

and you just wanted `id` and `title`, you could write

```js
// mirage/serializers/blog-post.js

export default Serializer.extend({
  attrs: ['id', 'title']
});
```

and the payload would look like

```
{
  id: 1,
  title: 'Lorem ipsum'
}
```

---

## include

Use this property on a model serializer to specify related models you'd like to include in your JSON payload.

For example, if you had an `author` with many `blog-post`s:

```js
// mirage/models/author.js
export default Model.extend({
  blogPosts: hasMany()
});
```

and you wanted to sideload these, specify so in the `include` key:

```js
// mirage/serializers/authors.j
export default Serializer.extend({
  include: ['blogPosts']
});
```

Now a response to a request for an author would look like this:

```
GET /authors/1

{
  author: {
    id: 1,
    name: 'Link',
    blogPostIds: [1, 2]
  },
  blogPosts: [
    {id: 1, authorId: 1, title: 'Lorem'},
    {id: 2, authorId: 1, title: 'Ipsum'}
  ]
}
```

---

## root
*default true*

Set whether your JSON response should have a root key in it.

By default it does, so a request for an author looks like:

```
GET /authors/1

{
  author: {
    id: 1,
    name: 'Link'
  }
}
```

Setting `root` to false disables this:

```js
// mirage/serializers/application.js
export default Serializer.extend({
  root: false 
});
```

Now the response looks like:

```
GET /authors/1

{
  id: 1,
  name: 'Link'
}
```

---

## embed
*default false*

Set whether related models should be embedded or sideloaded.

By default this false, so relationships are sideloaded:

```
GET /authors/1

{
  author: {
    id: 1,
    name: 'Link',
    blogPostIds: [1, 2]
  },
  blogPosts: [
    {id: 1, authorId: 1, title: 'Lorem'},
    {id: 2, authorId: 1, title: 'Ipsum'}
  ]
}
```

Setting `embed` to true will embed related records:

```js
// mirage/serializers/application.js
export default Serializer.extend({
  embed: true 
});
```

Now the response looks like:

```
GET /authors/1

{
  author: {
    id: 1,
    name: 'Link',
    blogPosts: [
      {id: 1, authorId: 1, title: 'Lorem'},
      {id: 2, authorId: 1, title: 'Ipsum'}
    ]
  ]
}
```

---

## keyForModel(*modelName*)

Used to define a custom key when serializing a primary model of modelName *modelName*. For example, the default Serializer will return something like the following:

```
GET /blogPosts/1

{
  blogPost: {
    id: 1,
    title: 'Lorem ipsum'
  }
}
```

If your API uses hyphenated keys, you could overwrite `keyForModel`:

```js
// serializers/application.js
export default Serializer.extend({
  keyForModel(modelName) {
    return Ember.String.dasherize(modelName);
  }
});
```

Now the response will look like

```
{
  'blog-post': {
    id: 1,
    title: 'Lorem ipsum'
  }
}
```

---

## keyForCollection(*modelName*)

Used to customize the key when serializing a primary collection. By default this pluralizes the return value of `keyForModel`.

For example, by default the following request may look like:

```
GET /blogPosts

{
  blogPosts: [
    {
      id: 1,
      title: 'Lorem ipsum'
    },
    ...
  ]
}
```

If your API hyphenates keys, you could overwrite `keyForCollection`:

```js
// serializers/application.js
const { dasherize, pluralize } = Ember.String;

export default Serializer.extend({
  keyForCollection(modelName) {
    return pluralize(dasherize(modelName));
  }
});
```

Now the response would look like:

```
{
  'blog-posts': [
    {
      id: 1,
      title: 'Lorem ipsum'
    },
    ...
  ]
}
```

---

## keyForAttribute(*attr*)

Used to customize how a model's attribute is formatted in your JSON payload.

By default, model attributes are camelCase:

```
GET /authors/1

{
  author: {
    firstName: 'Link',
    lastName: 'The WoodElf'
  }
}
```

If your API expects snake case, you could write the following:

```js
// serializers/application.js
const { underscore } = Ember.String;

export default Serializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  }
});
```

Now the response would look like:

```
{
  author: {
    first_name: 'Link',
    last_name: 'The WoodElf'
  }
}
```

---

## keyForRelationship(*relationship*)

Use this hook to format the key for collections
related to this model. *relationship* is the named parameter for the relationship.

For example, if you're serializing an `author` that
sideloads many `blogPosts`, the default response will look like:

```
{
  author: {...},
  blogPosts: [...]
}
```

Overwrite `keyForRelationship` to format this key:

```js
// serializers/application.js
const { underscore } = Ember.String;

export default Serializer.extend({
  keyForRelationship(relationship) {
    return underscore(relationship);
  }
});
```

Now the response will look like this:

```
{
  author: {...},
  blog_posts: [...]
}
```

---

## keyForRelationshipIds(*relationship*)

Use this hook to format the key for relationship ids
in this model's JSON representation.

For example, if you're serializing an `author` that
sideloads many `blogPosts`, your `author` JSON would include a `blogPostIds` key:

```
{
  author: {
    id: 1,
    blogPostIds: [1, 2, 3]
  },
  blogPosts: [...]
}
```

Overwrite `keyForRelationshipIds` to format this key:

```js
// serializers/application.js
const { underscore } = Ember.String;

export default Serializer.extend({
  keyForRelationshipIds(relationship) {
    return underscore(relationship) + '_ids';
  }
});
```

Now the response will look like:

```
{
  author: {
    id: 1,
    blog_post_ids: [1, 2, 3]
  },
  blogPosts: [...]
}
```
