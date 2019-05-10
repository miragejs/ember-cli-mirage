# Factories

One of the main benefits of using Mirage is the ability to quickly put your server into different states.

For example, you might be developing a feature and want to see how the UI renders for both a logged-in user and an anonymous user. This is the kind of thing that's a pain when using a real backend server, but with Mirage it's as simple as flipping a JavaScript variable.

**Factories** are classes that help you organize your data-creation logic, making it easier to define different server states during development or within tests.

Let's see how they work.

## Defining and using your first Factory

Say we have a `Movie` model defined in Mirage. (Remember, if you're using Ember Data you won't have this file on disk. The Model definition will be automatically generated for you.)

```js
// mirage/models/movie.js
import { Model } from 'ember-cli-mirage';

export default Model.extend({
});
```

To seed Mirage's database with some movie models so you can start developing your app, use the `server.create` method in the `scenarios/default.js` file:

```js
// mirage/scenarios/default.js
export default function(server) {

  server.create('movie');

}
```

`server.create` takes the singular hyphenated form of your model's class name as its first parameter.

Because we have no Factory defined for a `Movie`, `server.create('movie')` will just create an empty record and insert it into the database:

```js
// server.db.dump();
{
  movies: [
    { id: '1' }
  ]
}
```

Not a very interesting record.

However, we can pass attributes of our own as the second argument to `server.create`:

```js
// mirage/scenarios/default.js
export default function(server) {

  server.create('movie', {
    title: 'Interstellar',
    releaseDate: '10/26/2014',
    genre: 'Sci-Fi'
  });

}
```

Now our database looks like this

```js
{
  movies: [
    {
      id: '1',
      title: 'Interstellar',
      releaseDate: '10/26/2014',
      genre: 'Sci-Fi'
    }
  ]
}
```

and we'll actually be able to develop our UI against realistic data.

This is a great way to start, but it can be cumbersome to manually define every attribute (and relationship) when working on data-driven applications. It would be nice if we had a way to dynamically generate some of these attributes.

Fortunately, that's exactly what Factories let us do!

Let's generate a Factory for our movie using

```
ember g mirage-factory movie
```

which creates this file:

```js
// mirage/factories/movie.js
import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
});
```

Right now the Factory is empty. Let's define a property on it:

```js
// mirage/factories/movie.js
import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  title: 'Movie title'

});
```

Now `server.create('movie')` will use the properties from this factory. The inserted record will look like this:

```js
{
  movies: [
    { id: '1', title: 'Movie title' }
  ]
}
```

We can also make this property a function.

```js
// mirage/factories/movie.js
import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  title(i) {
    return `Movie ${i}`;
  }

});
```

`i` is an incrementing index that lets us make our factory attributes more dynamic.

If we use the `server.createList` method, we can quickly generate five movies

```js
server.createList('movie', 5);
```

and with the above factory definition, our database will look like this:

```js
{
  movies: [
    { id: '1', title: 'Movie 1' },
    { id: '2', title: 'Movie 2' },
    { id: '3', title: 'Movie 3' },
    { id: '4', title: 'Movie 4' },
    { id: '5', title: 'Movie 5' }
  ]
}
```

Let's add some more properties to our factory:

```js
// mirage/factories/movie.js
import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  title(i) {
    return `Movie ${i}`;
  },

  releaseDate() {
    return faker.date.past().toLocaleDateString();
  },

  genre(i) {
    let genres = [ 'Sci-Fi', 'Drama', 'Comedy' ];

    return genres[i % genres.length];
  }

});
```

Here we've installed the [Faker.js](https://github.com/marak/Faker.js/) library to help us generate random dates.

Now `server.createList('movie', 5)` gives us this data:

```js
{
  movies: [
    { id: '1', title: 'Movie 1', releaseDate: '5/14/2018', genre: 'Sci-Fi' },
    { id: '2', title: 'Movie 2', releaseDate: '2/22/2019', genre: 'Drama' },
    { id: '3', title: 'Movie 3', releaseDate: '6/2/2018', genre: 'Comedy' },
    { id: '4', title: 'Movie 4', releaseDate: '7/29/2018', genre: 'Sci-Fi' },
    { id: '5', title: 'Movie 5', releaseDate: '6/30/2018', genre: 'Drama' },
  ]
}
```

As you can see, Factories let us rapidly generate different scenarios for our dynamic data.


## Usage in development

To use your factories to seed your development database, call `server.create` and `server.createList` in your `scenarios/default.js` file.

```js
// mirage/scenarios/default.js
export default function(server) {
  server.createList('movie', 10);
}
```

There's no explicit API for switching scenarios in development, but you can just use JavaScript modules to split things up.

For example, you could create a new file for each scenario that contains your seeding logic

```js
// mirage/scenarios/admin.js
export default function(server) {
  server.create('user', { isAdmin: true });
}
```

...export all scenarios from an `index.js` file

```js
// mirage/scenarios/index.js
import anonymous from './anonymous';
import subscriber from './subscriber';
import admin from './admin';

export default scenarios = {
  anonymous,
  subscriber,
  admin
}
```

...and then import that into `default.js`. Now you can quickly switch your development state by changing a single variable:

```js
// mirage/scenarios/default.js
import scenarios from './index';

// Choose one
const state =
  // 'anonymous'
  // 'subscriber'
  'admin'
;
export default function(server) {
  scenarios[state](server);
}
```


## Usage in testing

In testing, your `scenarios/default.js` file is ignored. However, all your route handler definitions from `mirage/config.js` are still loaded.

That means each test starts with a clean database, giving you the opportunity to set up only the state needed for that test. It also keeps your development scenarios isolated from your tests, so changes in development don't inadvertently break your test suit.

In this test we create five movies and then assert they show up in our UI:

```js
test('I can see the movies on the homepage', async function(assert) {
  server.createList('movie', 5);

  await visit('/');

  assert.dom('li.movie').exists({ length: 5 });
});
```

You can read more about testing with Mirage in the [Testing]() section of the guides.


## Overriding factory attributes

Factories are great for defining the "base case" of your models.


## Referencing other attributes

## The afterCreate hoook

## Working with relationships

## Traits


## Best practices

- You should define the attributes of your factory as the "base case" for your objects, and override them within your tests. We'll discuss how do to this in the Creating Objects section.
