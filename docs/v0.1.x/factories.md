---
title: Factories
version: v0.1.x

redirect_from: "/docs/latest/factories/"
---

Factories are a useful way to seed your database, either during development or within tests. Whenever you generate an object via a factory, it will automatically get added to the database, and thus get an autoassigned `id`.

You define factories by creating files under the `/mirage/factories` directory. The name of the factory is determined by the filename.

Factories have attributes, and you create objects from factory definitions using the `server.create` and `server.createList` methods.

## Defining factories

Attributes can be static (strings, numbers or booleans) or dynamic (a function). Here's a factory with some static attributes:

```js
// mirage/factories/user.js
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: 'Link',
  age: 563,
  evil: false,
});
```

Functions receive the sequence number *i* as an argument, which is useful to create dynamic attributes:

```js
// mirage/factories/user.js
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function(i) {
    return 'User ' + i
  }
});
```

The first user generated (per test) would have a name of `User 1`, the second a name of `User 2`, and so on.

<aside class='Docs-page__aside'>
  <p>Currently, you cannot reference dynamic attributes, although this is <a href='https://github.com/samselikoff/ember-cli-mirage/issues/27'>in the works</a></p>
</aside>

Finally, you can also reference static attributes (numbers, strings or booleans) within your dynamic attributes via `this`:

```js
// mirage/factories/contact.js
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  age: 18,
  is_admin: function(i) {
    return this.age > 30;
  }
});
```

You should define the attributes of your factory as the "base case" for your objects, and override them within your tests. We'll discuss how do to this in the Creating Objects section.

## Using Faker.js

<aside class='Docs-page__aside'>
  <p>Faker was added in version 0.1.3.</p>
</aside>

The [Faker.js](https://github.com/marak/Faker.js/) library is included with Mirage, and its methods work nicely with factory definitions:

```js
// app/mirage/factories/user.js
import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstName() { return faker.name.firstName(); },
  lastName() { return faker.name.lastName(); },
  avatar() { return faker.internet.avatar(); }
});
```

We've also added two methods on the `faker` namespace, `list.cycle` and `list.random`, which are useful if you have a set of data you want your factories to iterate through:

```js
// app/mirage/factories/subject.js
import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) {
    return faker.list.cycle('Economics', 'Philosophy', 'English', 'History', 'Mathematics')(i);
  },
  students(i) {
    return faker.list.random(100, 200, 300, 400, 500)(i);
  }
});
```

`cycle` loops through the data in order, while `random` chooses a random element from the list each time an object is created.

View [Faker's docs](https://github.com/marak/Faker.js/) for the full faker API.

## Extending factories

You can also extend factories:

```js
// mirage/factories/human.js
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  species: 'homo sapiens'
});

// mirage/factories/man.js
import Human from './human';

export default Human.extend({
  gender: 'male'
});
```

## Creating objects

Once you've defined a factory for a model, you can generate data for that model using `server.create` and `server.createList`, either from within `/app/mirage/scenarios/default.js` for development, or from within your acceptance tests.

<a name="create" href="#create">#</a> server.<b>create</b>(<i>type</i> [, <i>attrs</i>])

Generates a single model of type *type*, inserts it into the database (giving it an id), and returns the data that was
added.

```js
test("I can view a contact's details", function() {
  var contact = server.create('contact');

  visit('/contacts/' + contact.id);

  andThen(function() {
    equal( find('h1').text(), 'The contact is Link');
  });
});
```

You can override the attributes from the factory definition with a
hash passed in as the second parameter. For example, if we had this factory

```js
export default Mirage.Factory.extend({
  name: 'Link'
});
```

we could override the name like this:

```js
test("I can view the contacts", function() {
  server.create('contact', { name: 'Zelda' });

  visit('/');

  andThen(function() {
    equal( find('p').text(), 'Zelda' );
  });
});
```

<a name="createList" href="#createList">#</a> server.<b>createList</b>(<i>type</i>, <i>amount</i> [, <i>attrs</i>])

Creates *amount* models of type *type*, optionally overriding the attributes from the factory with *attrs*.

Returns the array of records that were added to the database.

Here's an example from a test:

```js
test("I can view the contacts", function() {
  server.createList('contact', 5);
  var youngContacts = server.createList('contact', 5, { age: 15 });

  visit('/');

  andThen(function() {
    equal(currentRouteName(), 'index');
    equal( find('p').length, 10 );
  });
});
```

And one from setting up your development database:

```js
// app/mirage/scenarios/default.js
export default function(server) {
  var contact = server.create('contact');
  server.createList('address', { contact_id: contact.id });
}
```
