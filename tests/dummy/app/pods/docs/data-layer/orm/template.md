# The ORM

Mirage originally shipped with just a database for its data layer, but it was too low-level and required too much code for users to write a faithful recreation of their modern, complex backends. In particular, dealing with relationships required a lot of work.

The solution was to add an Object Relational Mapper, or ORM, to Mirage.

Let's see how the ORM helps Mirage do more of the heavy lifting for you.


## Separating formatting logic

Consider a database that looks like this:

```js
db.dump();

// Result
{
  movies: [
    { id: '1', title: 'Interstellar' },
    { id: '2', title: 'Inception' },
    { id: '3', title: 'Dunkirk' }
  ]
}
```

The first problem you'll encounter when writing a route handler is how to transform this raw data into the format your Ember app expects – that is, how to match the format of your production API.

Let's say your backend is using the [JSON:API](https://jsonapi.org/) format. In that case, your response for a GET request to `/api/movies` would need to look something like this:

```js
// GET /api/movies
{
  data: [
    { id: '1', type: 'movies', attributes: { title: 'Interstellar' } },
    { id: '2', type: 'movies', attributes: { title: 'Inception' } },
    { id: '3', type: 'movies', attributes: { title: 'Dunkirk' } },
  ]
}
```

Not a huge deal – we could just write this formatting logic directly in our route handler:

```js
this.get('/movies', (schema, request) => {
  let movies = schema.db.movies;

  return {
    data: movies.map(movie => ({
      id: movie.id,
      type: 'movies',
      attributes: {
        title: movie.title
      }
    }));
  };
});
```

This works. But let's say our `Movie` models had a few more attributes:

```js
db.movies.find(1);

// Result
{
  id: '1',
  title: 'Interstellar',
  releaseDate: 'October 26, 2014',
  genre: 'Sci-Fi'
}
```

Now our route handler needs to be a bit more clever, and make sure all properties other than `id` end up in the `attributes` hash:

```js
this.get('/movies', (schema, request) => {
  let movies = schema.db.movies;

  return {
    data: movies.map(movie => ({
      let movieJson = Object.keys(movie.attrs).reduce((json, key) => {
        if (key === 'id') {
          json.id = movie.id;
        } else {
          json.attributes[key] = movie[key];
        }

        return json;
      }, {});

      movieJson.type = 'movies';

      return movieJson;
    }));
  };
});
```

As you can see, this is already getting quite complicated.

Now, what if we were to add relationships to the mix? Say `Movie` has a relationships to a `Director`, and it stores that foreign key as `directorId`:

```js
{
  id: '1',
  directorId: '23',
  title: 'Interstellar',
  releaseDate: 'October 26, 2014',
  genre: 'Sci-Fi'
}
```

The serialized JSON for this model should now look something like this

```js
{
  data: {
    id: '1',
    type: 'movies',
    attributes: {
      title: 'Interstellar'
    },
    relationships: {
      directors: {
        data: { type: 'directors', id: '23' }
      }
    }
  }
}
```

meaning our route handler would need to get even more clever. In particular, it needs a robust way to differentiate between a model's attributes (like `title`) and its relationship keys (like `directorId`).

This turns out to be a common enough problem that we can solve the general case by telling Mirage some information about your application's domain models and their relationships. In this way, Mirage can offload a ton of the low-level work required to properly implement your mock server.

Let's see how it looks.



## Fetching related data




## Creating related data




## Fetching related data

Suppose your backend supports the ability to fetch related data from a resource.

For example, let's say this request

```
GET /api/movies/1/relationships/cast-members
```

returns this response:

```js
{
  data: [
    {
      id: '1',
      type: 'cast-members',
      attributes: {
        name: 'Matthew McConaughey'
      },
      relationships: {
        movie: {
          data: { type: 'movies', id: '1' }
        }
      }
    },
    {
      id: '2',
      type: 'cast-members',
      attributes: {
        name: 'Anne Hathaway'
      },
      relationships: {
        movie: {
          data: { type: 'movies', id: '1' }
        }
      }
    },
    {
      id: '3',
      type: 'cast-members',
      attributes: {
        name: 'Jessica Chastain'
      },
      relationships: {
        movie: {
          data: { type: 'movies', id: '1' }
        }
      }
    },
  ]
}
```

Without the ORM, your route handler might look something like this:

```js
this.get('/movies/:id/relationships/cast-members', (schema, request) => {
  return schema.db.castMembers.where({ movieId: request.params.id });
});
```

With the ORM,
