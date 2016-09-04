import Mirage from 'ember-cli-mirage';
import Ember from 'ember';
import posts from './routes/posts';
import comments from './routes/comments';

export default function() {
  this.use = (root, router) => {
    var methods = {};

    ['get', 'put', 'post', 'delete', 'patch'].forEach(verb => {
      methods[verb] = (path, fn) => {
        return this[verb](root + path, fn);
      };
    });

    router.call(methods);
  };

  this.get('/contacts');
  // this.get('/contacts', ['contacts', 'addresses']);
  this.get('/contacts/:id');
  this.post('/contacts');
  this.put('/contacts/:id');
  this.del('/contacts/:id');

  // Friends
  this.get('/friends', { coalesce: true });

  // Pets
  this.get('/pets', function({ db }) {
    return { pets: db.pets.filter(pet => pet.alive) };
  });

  this.post('/pets', function({ db }, req) {
    let { pet } = JSON.parse(req.requestBody);
    if (Ember.isBlank(pet.name)) {
      let body = { errors: { name: ["can't be blank"] } };
      return new Mirage.Response(422, { some: 'header' }, body);
    } else {
      return { pet: db.pets.insert(pet) };
    }
  });

  this.put('/pets/:id', function({ db }, req) {
    let { pet } = JSON.parse(req.requestBody);
    db.pets.update(pet.id, pet);
    return pet;
  });

  this.delete('/pets/:id', function({ db }, req) { }, 200);

  this.get('/word-smiths/:id');

  this.use('/posts', posts);
  this.use('/comments', comments);
}

export function testConfig() {
  this.get('/friends/:id');
}
