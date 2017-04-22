---
title: Shorthand reference
version: v0.3.x

redirect_from: "/docs/latest/shorthands/"
---

A *shorthand* is a simple way to define a route handler for common API scenarios. Here's a reference of each shorthand, along with the raw route handler that the shorthand represents.

In Mirage 0.1, shorthands responded with objects and arrays directly from the database. In 0.2, shorthands return Models and Collections, meaning you can customize the format of the response in the [serializer layer](../serializers).

Shorthands use default status codes, based on the HTTP verb:

  - GET, PUT and DEL are 200
  - POST is 201

## GET shorthands

*Collection*

{% capture shorthand %}
{% highlight js %}
this.get('/contacts');          // finds type by singularizing url
this.get('/contacts', 'users'); // optionally specify the collection as second param
{% endhighlight %}
{% endcapture %}

{% capture expanded %}
{% highlight js %}
this.get('/contacts', ({ contacts }) => {
  return contacts.all(); // users in the second case
});
{% endhighlight %}
{% endcapture %}

{% include code-compare.html expanded=expanded shorthand=shorthand %}

*Object*

{% capture shorthand %}
{% highlight js %}
this.get('/contacts/:id');         // finds type by singularizing url
this.get('/contacts/:id', 'user'); // optionally specify the type as second param
{% endhighlight %}
{% endcapture %}

{% capture expanded %}
{% highlight js %}
this.get('/contacts/:id', ({ contacts }, request) => {
  let id = request.params.id;

  return contacts.find(id); // users in the second case
});
{% endhighlight %}
{% endcapture %}

{% include code-compare.html expanded=expanded shorthand=shorthand %}

*Array of Objects*

For example, `GET /contacts?ids=1,3`

{% capture shorthand %}
{% highlight js %}
this.get('/contacts', { coalesce: true });
this.get('/contacts', 'users', { coalesce: true });
{% endhighlight %}
{% endcapture %}

{% capture expanded %}
{% highlight js %}
this.get('/contacts', ({ contacts }, request) => {
  let ids = request.queryParams.ids;

  return contacts.find(ids); // users in the second case
});
{% endhighlight %}
{% endcapture %}

{% include code-compare.html expanded=expanded shorthand=shorthand %}

---

*Note: there used to be a* Single record with related records *shorthand. You should now use serializers and relationships to solve this problem.*

## POST shorthands

*Creating a resource*

{% capture shorthand %}
{% highlight js %}
this.post('/contacts');          // finds type by singularizing url
this.post('/contacts', 'user');  // optionally specify the type as second param
{% endhighlight %}
{% endcapture %}

{% capture expanded %}
{% highlight js %}
this.post('/contacts', function({ contacts }, request) {
  let attrs = this.normalizedRequestAttrs();

  return contacts.create(attrs);
});
{% endhighlight %}
{% endcapture %}

{% include code-compare.html expanded=expanded shorthand=shorthand %}

For this POST shorthand to work, Mirage needs to know the format of the JSON payload your Ember app sends along with the request, so that it can insert the appropriate data into the database. See [the note on normalize](../serializers/#normalizejson) in the Serializer docs for more information.

## PUT shorthands

*Update a resource*

{% capture shorthand %}
{% highlight js %}
this.put('/contacts/:id');          // finds type by singularizing url
this.put('/contacts/:id', 'user');  // optionally specify the type as second param
{% endhighlight %}
{% endcapture %}

{% capture expanded %}
{% highlight js %}
this.put('/contacts/:id', function({ contacts }, request) {
  let id = request.params.id;
  let attrs = this.normalizedRequestAttrs();

  return contacts.find(id).update(attrs);
});
{% endhighlight %}
{% endcapture %}

{% include code-compare.html expanded=expanded shorthand=shorthand %}

For this PUT shorthand to work, Mirage needs to know the format of the JSON payload your Ember app sends along with the request, so that it can insert the appropriate data into the database. See [the note on normalize](../serializers/#normalizejson) in the Serializer docs for more information.

## DELETE shorthands

*Remove a resource*

{% capture shorthand %}
{% highlight js %}
this.del('/contacts/:id');          // finds type by singularizing url
this.del('/contacts/:id', 'user');  // optionally specify the type as second param
{% endhighlight %}
{% endcapture %}

{% capture expanded %}
{% highlight js %}
this.del('/contacts/:id', ({ contacts }, request) => {
  let id = request.params.id;

  contacts.find(id).destroy();
});
{% endhighlight %}
{% endcapture %}

{% include code-compare.html expanded=expanded shorthand=shorthand %}

*Remove a resource and related models*

To use this shorthand, make sure you have the appropriate `hasMany`/`belongsTo` relationships defined on your models.

{% capture shorthand %}
{% highlight js %}
this.del('/contacts/:id', ['contact', 'addresses']);
{% endhighlight %}
{% endcapture %}

{% capture expanded %}
{% highlight js %}
this.del('/contacts/:id', ({ contacts }, request) => {
  let id = request.params.id;
  let contact = contacts.find(id);

  contact.addresses.destroy();
  contact.destroy();
});
{% endhighlight %}
{% endcapture %}

{% include code-compare.html expanded=expanded shorthand=shorthand %}

## Resource helper

For handling generic CRUD, you can use *resource* helper which will take care of defining all shorthands. The following examples are equivalent:

{% capture resource %}
{% highlight js %}
this.resource('contacts'); // available in 0.2.2+
{% endhighlight %}
{% endcapture %}

{% capture equivalent %}
{% highlight js %}
this.get('/contacts');
this.get('/contacts/:id');
this.post('/contacts');
this.put('/contacts/:id');
this.patch('/contacts/:id');
this.del('/contacts/:id');
{% endhighlight %}
{% endcapture %}

{% include resource-shorthands-code-compare.html resource=resource equivalent=equivalent %}

You can also whitelist which route handlers will be defined using *only* option:

{% capture resource %}
{% highlight js %}
this.resource('contacts', { only: ['index', 'show'] });
{% endhighlight %}
{% endcapture %}

{% capture equivalent %}
{% highlight js %}
this.get('/contacts');
this.get('/contacts/:id');
{% endhighlight %}
{% endcapture %}

{% include resource-shorthands-code-compare.html resource=resource equivalent=equivalent %}

or which route handlers shouldn't be defined using *except* option:

{% capture resource %}
{% highlight js %}
this.resource('contacts', { except: ['update'] });
{% endhighlight %}
{% endcapture %}

{% capture equivalent %}
{% highlight js %}
this.get('/contacts');
this.get('/contacts/:id');
this.post('/contacts');
this.del('/contacts/:id');
{% endhighlight %}
{% endcapture %}

{% include resource-shorthands-code-compare.html resource=resource equivalent=equivalent %}

If your route path, and collection names do not match, you can define a relative
or absolute path into the *path* option.

{% capture resource %}
{% highlight js %}
this.resource('blog-posts', { path: '/posts' });
{% endhighlight %}
{% endcapture %}

{% capture equivalent %}
{% highlight js %}
this.get('/posts', 'blog-posts');
this.get('/posts/:id', 'blog-posts');
this.post('/posts', 'blog-posts');
this.put('/posts/:id', 'blog-posts');
this.patch('/posts/:id', 'blog-posts');
this.del('/posts/:id', 'blog-posts');
{% endhighlight %}
{% endcapture %}

{% include resource-shorthands-code-compare.html resource=resource equivalent=equivalent %}

Here is the full reference of actions' names you can pass to *only* / *except* options and the shorthands they stand for:

<div class='Table__wrapper'>
  <table>
    <tbody>
      <tr>
        <td class='Table__label'>index</td>
        <td class='Table__code'>
{% highlight js %}
  this.get('/contacts');
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <td class='Table__label'>show</td>
        <td class='Table__code'>
{% highlight js %}
  this.get('/contacts/:id');
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <td class='Table__label'>create</td>
        <td class='Table__code'>
{% highlight js %}
  this.post('/contacts');
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <td class='Table__label'>update</td>
        <td class='Table__code'>
{% highlight js %}
  this.put('/contacts/:id');
  this.patch('/contacts/:id');
{% endhighlight %}
        </td>
      </tr>
      <tr>
        <td class='Table__label'>delete</td>
        <td class='Table__code'>
{% highlight js %}
  this.del('/contacts/:id');
{% endhighlight %}
        </td>
      </tr>
    </tbody>
  </table>
</div>
