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

test('server reports no requests', function(assert) {
  assert.expect(1);

  assert.ok(this.server.didNotReceive.get.to('any'));
});

['get', 'post', 'put', 'delete', 'head'].forEach(verb => {
  test(`reports ${verb} to '/contacts'`, function(assert) {
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

test('matches query params', function(assert) {
  assert.expect(6);
  let done = assert.async();

  this.server.get('/contacts', () => true);

  $.ajax({
    method: 'GET',
    url: '/contacts',
    data: { page: 4, sort: 'name' }
  }).done(() => {
    assert.ok(this.server.received.get.to('/contacts', { page: 4 }));
    assert.ok(this.server.received.get.to('/contacts', { sort: 'name' }));
    assert.ok(this.server.received.get.to('/contacts', { page: 4, sort: 'name' }));
    assert.ok(this.server.received.get.with({ page: 4 }));
    assert.ok(this.server.received.get.with({ sort: 'name' }));
    assert.ok(this.server.received.get.with({ page: 4, sort: 'name' }));
    done();
  });
});

test('matches post params', function(assert) {
  assert.expect(4);
  let done = assert.async();

  this.server.post('/contacts', () => true);

  $.ajax({
    method: 'POST',
    url: '/contacts',
    data: JSON.stringify({ name: 'Bilbo', age: 111 })
  }).done(() => {
    assert.ok(this.server.received.post.to('/contacts', { name: 'Bilbo', age: 111 }));
    assert.ok(this.server.received.post.with({ name: 'Bilbo' }));
    assert.notOk(this.server.received.post.to('/contacts', { name: 'Frodo' }));
    assert.notOk(this.server.received.post.with({ name: 'Frodo' }));
    done();
  });
});

test('to accepts RegExps', function(assert) {
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

test('lastRequest returns the last request that was made', function(assert) {
  assert.expect(1);
  let done = assert.async();

  this.server.get('/contacts', () => true);
  this.server.get('/posts', () => true);

  $.ajax({ url: '/contacts' }).done(() => {
    $.ajax('/posts').done(() => {
      assert.equal(this.server.lastRequest.url, '/posts');
      done();
    });
  });
});
