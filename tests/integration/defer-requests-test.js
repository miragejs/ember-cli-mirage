import { module, skip, test } from 'qunit';
import Server from 'ember-cli-mirage/server';
import promiseAjax from '../helpers/promise-ajax';
import RSVP from 'rsvp';

const sleep = function(ms) {
  return new RSVP.Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

module('Integration | defer requests', function(hooks) {
  hooks.beforeEach(function() {
    this.server = new Server({
      environment: 'development'
    });

    this.server.timing = 0;
    this.server.namespace = '';
    this.server.logging = false;

    this.server.get('/posts', () => {});
    this.server.post('/posts', () => {});
    this.server.get('/comments', () => {});
  });

  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('it can defer requests', async function(assert) {
    this.server.deferRequests();

    let request = promiseAjax({
      methog: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('request');
    });

    await sleep(100);
    assert.step('timer');

    this.server.resolveRequests();
    await request;
    assert.verifySteps(['timer', 'request']);
  });

  test('it can defer requests for only a specific path', async function(assert) {
    this.server.deferRequests('/posts');

    let request1 = promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('deferred request');
    });

    let request2 = promiseAjax({
      method: 'GET',
      url: '/comments'
    }).then(() => {
      assert.step('normal request');
    });

    this.server.resolveRequests('/posts');

    await RSVP.all([request1, request2]);
    assert.verifySteps(['normal request', 'deferred request']);
  });

  test('it can defer requests for only some methods of a path', async function(assert) {
    this.server.deferRequests('/posts', { methods: ['GET'] });

    let request1 = promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('deferred request');
    });

    let request2 = promiseAjax({
      method: 'POST',
      url: '/posts'
    }).then(() => {
      assert.step('normal request');
    });

    this.server.resolveRequests('/posts', { method: ['GET'] });

    await RSVP.all([request1, request2]);
    assert.verifySteps(['normal request', 'deferred request']);
  });

  skip('it can defer requests for only a specific resource', function(assert) {
    this.server.deferRequests('posts');
  });

  skip('it can defer requests for multiple paths', function(assert) {
    this.server.deferRequests('/posts');
    this.server.deferRequests('/comments');
  });

  skip('it can change deferring for a specific path', function(assert) {
    this.server.deferRequests('/posts', { methods: ['GET'] });
    this.server.deferRequests('/posts', { methods: ['GET', 'POST'] });
  });

  test('overriding route handler does not cancel deferring of requests for that one', async function(assert) {
    this.server.deferRequests('/posts');
    this.server.get('/posts', () => {});

    let request = promiseAjax({
      methog: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('request');
    });

    await sleep(100);
    assert.step('timer');

    this.server.resolveRequests();
    await request;
    assert.verifySteps(['timer', 'request']);
  });

  test('it can resolve requests for only a specific path', async function(assert) {
    this.server.deferRequests();

    let request1 = promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('/posts request');
    });

    let request2 = promiseAjax({
      method: 'GET',
      url: '/comments'
    }).then(() => {
      assert.step('/comments request');
    });

    this.server.resolveRequests('/comments');
    await request2;

    this.server.resolveRequests();
    await request1;

    assert.verifySteps(['/comments request', '/posts request']);
  });

  test('it can resolve requests for only some methods', async function(assert) {
    this.server.deferRequests();

    let request1 = promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('GET request');
    });

    let request2 = promiseAjax({
      method: 'POST',
      url: '/posts'
    }).then(() => {
      assert.step('POST request');
    });

    this.server.resolveRequests('/posts', { methods: ['POST'] });
    await request2;

    this.server.resolveRequests();
    await request1;

    assert.verifySteps(['POST request', 'GET request']);
  });

  skip('it can resolve requests for only a specific resource', function(assert) {
    this.resolveRequests('posts');
  });

  test('it returns number of deferred request that have been resolved', async function(assert) {
    this.server.deferRequests();

    promiseAjax({ method: 'GET', url: '/posts' });

    assert.equal(this.server.resolveRequests(), 1);

    promiseAjax({ method: 'GET', url: '/posts' });
    promiseAjax({ method: 'GET', url: '/posts' });

    assert.equal(this.server.resolveRequests(), 2);

    promiseAjax({ method: 'GET', url: '/posts' });
    promiseAjax({ method: 'GET', url: '/comments' });

    assert.equal(this.server.resolveRequests('/posts'), 1);
    assert.equal(this.server.resolveRequests('/comments'), 1);

    promiseAjax({ method: 'GET', url: '/posts' });
    promiseAjax({ method: 'POST', url: '/posts' });

    assert.equal(this.server.resolveRequests('/posts', { methods: ['GET'] }), 1);
    assert.equal(this.server.resolveRequests('/posts', { methods: ['POST'] }), 1);

    assert.equal(this.server.resolveRequests(), 0);
  });

  test('it can cancel deferring requests', async function(assert) {
    assert.expect(2);

    this.server.deferRequests();

    let request = promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.ok('deferred requests are settled');
    });

    this.server.undeferRequests();
    await request;

    await promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.ok('requests are not deferred anymore');
    });
  });

  test('it can cancel deferring requests for a specific path only', async function(assert) {
    assert.expect(4);

    this.server.deferRequests();

    let request1 = promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('deferred GET /posts');
    });

    let request2 = promiseAjax({
      method: 'GET',
      url: '/comments'
    }).then(() => {
      assert.step('deferred GET /comments');
    });

    this.server.undeferRequests('/posts');
    await request1;

    await promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('not deferred anymore');
    });

    this.server.undeferRequests();
    await request2;

    assert.verifySteps(['deferred GET /posts', 'not deferred anymore', 'deferred GET /comments']);
  });

  test('it can cancel deferring requests for only some methods of a path', async function(assert) {
    assert.expect(4);

    this.server.deferRequests();

    let request1 = promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('deferred GET /posts');
    });

    let request2 = promiseAjax({
      method: 'POST',
      url: '/posts'
    }).then(() => {
      assert.step('deferred POST /posts');
    });

    this.server.undeferRequests('/posts', { methods: ['GET'] });
    await request1;

    await promiseAjax({
      method: 'GET',
      url: '/posts'
    }).then(() => {
      assert.step('not deferred anymore');
    });

    this.server.undeferRequests();
    await request2;

    assert.verifySteps(['deferred GET /posts', 'not deferred anymore', 'deferred POST /posts']);
  });

  skip('it can cancel deferring requests for only a specific resource', function(assert) {
    this.server.undeferRequests('posts');
  });

  skip('it returns number of deferred request that have been resolved by cancel deffering');

  test('it respects namespace configuration', async function(assert) {
    this.server.namespace = 'v1';
    this.server.get('/authors', () => {});
    this.server.deferRequests('/authors');

    let request = promiseAjax({
      method: 'GET',
      url: '/v1/authors'
    }).then(() => {
      assert.step('deferred request');
    });

    await sleep(100);
    assert.step('timer');

    this.server.resolveRequests('/authors');
    await request;
    assert.verifySteps(['timer', 'deferred request']);
  });

  skip('it can handle promises returned by route handler that settle before resolveRequests() is called');
  skip('it can handle promises returned by route handler that settle after resolveRequests() has been called');

  skip('it can handle timing that is expired before resolveRequests() is called');
  skip('it can handle timing that is expired after resolveRequests() has been called');
});
