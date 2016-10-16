import {module, test} from 'qunit';
import Server from 'ember-cli-mirage/server';

module('Integration | Server Request Assertion', {
  beforeEach() {
    this.server = new Server({
      environment: 'development'
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('it returns the number of matching requests when `received` is used', function(assert) {
  let done = assert.async();

  this.server.get('/contacts', () => true);

  $.ajax('/contacts').done(() => {
    $.ajax('/contacts').done(() => {
      assert.equal(this.server.received.get.to('/contacts'), 2);
      done();
    });
  });
});

test('it returns a boolean when `didNotReceive` is used', function(assert) {
  assert.equal(this.server.didNotReceive.request.to('/contacts'), true);
});

test('it matches query params', function(assert) {
  assert.expect(3);
  let done = assert.async();

  this.server.get('/contacts', () => true);

  $.ajax({
    method: 'GET',
    url: '/contacts',
    data: { page: 4, sort: 'name' }
  }).done(() => {
    assert.ok(this.server.received.get.to('/contacts', { queryParams: { page: 4 } }));
    assert.ok(this.server.received.get.to('/contacts', { queryParams: { sort: 'name' } }));
    assert.ok(this.server.received.get.to('/contacts', { queryParams: { page: 4, sort: 'name' } }));
    done();
  });
});

test('it matches post params', function(assert) {
  assert.expect(4);
  let done = assert.async();

  this.server.post('/contacts', () => true);

  $.ajax({
    method: 'POST',
    url: '/contacts',
    data: JSON.stringify({
      name: 'Bilbo',
      age: 111,
      address: {
        city: 'Hobbitton',
        zip: 'none'
      }
    })
  }).done(() => {
    assert.ok(this.server.received.post.to('/contacts', { requestBody: { name: 'Bilbo', age: 111 } }));
    assert.ok(this.server.received.post.to({ requestBody: { name: 'Bilbo', address: { zip: 'none' } } }));
    assert.notOk(this.server.received.post.to('/contacts', { requestBody: { name: 'Frodo' } }));
    assert.notOk(this.server.received.post.to({ requestBody: { name: 'Frodo' } }));
    done();
  });
});

test('it matches requestHeaders', function(assert) {
  let done = assert.async();

  this.server.get('/contacts', () => true);

  $.ajax({
    method: 'GET',
    url: '/contacts',
    headers: {
      'X-Header': 'hello'
    }
  }).done(() => {
    assert.ok(this.server.received.get.to('/contacts', { requestHeaders: { 'X-Header': 'hello' } }));
    assert.ok(this.server.didNotReceive.get.to('/contacts', { requestHeaders: { 'X-Header': 'hi' } }));
    done();
  });
});

test('it matches URLs specified as RegExps', function(assert) {
  assert.expect(2);
  let done = assert.async();

  this.server.get('/contacts/:id', () => true);

  $.ajax({
    method: 'GET',
    url: '/contacts/5'
  }).done(() => {
    assert.ok(this.server.received.get.to(/\/contacts\/\d+$/));
    assert.notOk(this.server.received.get.to(/\/shizzles\/\d+$/));
    done();
  });
});

test('server.requests.last returns the last request that was made', function(assert) {
  assert.expect(1);
  let done = assert.async();

  this.server.get('/contacts', () => true);
  this.server.get('/posts', () => true);

  $.ajax('/contacts').done(() => {
    $.ajax('/posts').done(() => {
      assert.equal(this.server.requests.last.url, '/posts');
      done();
    });
  });
});

['get', 'post', 'put', 'delete', 'head'].forEach(verb => {
  test(`it reports ${verb} to '/contacts'`, function(assert) {
    assert.expect(4);
    let done = assert.async();

    this.server[verb]('/contacts', () => true);

    $.ajax({
      method: verb,
      url: '/contacts'
    }).done(() => {
      assert.ok(this.server.received[verb].to('/contacts'));
      assert.ok(this.server.received.request.to('/contacts'));
      assert.notOk(this.server.didNotReceive[verb].to('/contacts'));
      assert.notOk(this.server.didNotReceive.request.to('/contacts'));
      done();
    });
  });
});

