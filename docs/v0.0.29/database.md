---
title: Database
version: v0.0.29
---

Your Mirage server has a database which you can interact with via the *verb methods* (`get`, `post`, `put` and `del`) in your routes. You retrieve or modify data from the database, then return what you want for that route.

Here are the database methods available to you from within your route definitions.

<a name="createCollection" href="#createCollection">#</a> db.<b>createCollection</b>(<i>name</i>)

Add an empty collection named *name* to your database. Typically you won't need to do this yourself, since collections are automatically created for any factories and fixtures you've defined.

<a name="collection" href="#collection">#</a> db.<b>collection</b>

Returns the *collection* attached to the database object.

For example if you had the following data file named `/app/mirage/fixtures/contacts.js`

```js
export default [
  { id: 1, name: 'Sam' }, { id: 2, name: 'Ryan' }
];
```

then `db.contacts` would return this array.

<a name="insert" href="#insert">#</a> db.collection.<b>insert</b>(<i>data</i>)

Inserts *data* into the collection. *data* can be a single object or an array of objects. Returns the inserted record.

```js
// Insert a single record
var link = db.users.insert({ name: 'Link', age: 173 });
link;  // { id: 1, name: 'Link', age: 137 }

// Insert an array
var users = db.users.insert([
  { name: 'Zelda', age: 142 },
  { name: 'Epona', age: 58 },
]);
users;  // [{ id: 2, name: 'Zelda', age: 142 }, { id: 3, name: 'Epona', age: 58 }]
```

<a name="find" href="#find">#</a> db.collection.<b>find</b>(<i>ids</i>)

Returns a single record from the *collection* if *ids* is a single id, or an array of records if *ids* is an array of ids. Note each *id* can be an int or a string, but integer ids as strings (e.g. the string "1") will be treated as integers.

```js
/*
  Given users = [{ id: 1, name: 'Link' }, { id: 2, name: 'Zelda' }]
*/
db.users.find(1); // { id: 1, name: 'Link' }
db.users.find([1, 2]); // [{ id: 1, name: 'Link' }, { id: 2, name: 'Zelda' }]
```
<a name="where" href="#where">#</a> db.collection.<b>where</b>(<i>query</i>)

Returns an array of models from *collection* that match the key-value pairs in the *query* object. *query* is a POJO.

```js
/*
  Given users = [{ id: 1, name: 'Link' }, { id: 2, name: 'Zelda' }]
*/

db.users.where({ name: 'Zelda' }); // [{ id: 2, name: 'Link' }]
```

<a name="update" href="#update">#</a> db.collection.<b>update</b>(<i>attrs</i>) or db.collection.<b>update</b>(<i>target</i>, <i>attrs</i>)

Updates one or more records in *collection*.

If *attrs* is the only arg present, updates all records in the collection according to the key-value pairs in *attrs*.

If *target* is present, restricts updates to those that match *target*. If *target* is a number or string, finds a single record whose id is *target* to update. If *target* is a POJO, queries *collection* for records that match the key-value pairs in *target*, and updates their *attrs*.

Returns the updated record or records.

```js
/*
  Given users = [
    { id: 1, name: 'Link' },
    { id: 2, name: 'Zelda' }
  ]
*/

db.users.update({ name: 'Ganon' }); // db.users = [{ id: 1, name: 'Ganon' }, { id: 2, name: 'Ganon' }]
db.users.update(1, { name: 'Young Link' }); // db.users = [{ id: 1, name: 'Young Link' }, { id: 2, name: 'Zelda' }]
db.users.update({ name: 'Link' }, { name: 'Epona' }); // db.users = [{ id: 1, name: 'Epona' }, { id: 2, name: 'Zelda' }]
```

<a name="remove" href="#remove">#</a> db.collection.<b>remove</b>(<i>target</i>)

Removes one or more records in *collection*.

If *target* is undefined, removes all records. If *target* is a number or string, removes a single record using *target* as id. If *target* is a POJO, queries *collection* for records that match the key-value pairs in *target*, and removes them from the collection.

```js
/*
  Given users = [
    { id: 1, name: 'Link' },
    { id: 2, name: 'Zelda' }
  ]
*/

db.users.remove(); // db.users = []
db.users.remove(1); // db.users = [{ id: 2, name: 'Zelda' }]
db.users.remove({ name: 'Zelda' }); // db.users = [{ id: 1, name: 'Link' }]
```
