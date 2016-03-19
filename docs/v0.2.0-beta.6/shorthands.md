---
title: Shorthand reference
version: v0.2.0-beta.6

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
this.get('/contacts', ({ contact }) => {
  return contact.all(); // schema.user in the second case
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
this.get('/contacts/:id', ({ contact }, request) => {
  let id = request.params.id;

  return contact.find(id); // schema.user in the second case
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
this.get('/contacts', ({ contact }, request) => {
  var ids = request.queryParams.ids;

  return contact.find(ids); // schema.user in the second case
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
this.post('/contacts', ({ contact }, request) => {
  let json = JSON.parse(request.requestBody);
  let attrs = [getAttrsFromRequest](request);

  return contact.create(attrs);
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
this.put('/contacts/:id', ({ contact }, request) => {
  let id = request.params.id;
  let attrs = [getAttrsFromRequest](request);

  return contact.find(id).update(attrs);
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
this.del('/contacts/:id', ({ contact }, request) => {
  let id = request.params.id;

  contact.find(id).destroy();
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
this.del('/contacts/:id', ({ contact, address }, request) => {
  let id = request.params.id;
  let contact = contact.find(id);

  contact.addresses.destroy();
  contact.destroy();
});
{% endhighlight %}
{% endcapture %}

{% include code-compare.html expanded=expanded shorthand=shorthand %}
