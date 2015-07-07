import {module, test} from 'qunit';
import Server from 'ember-cli-mirage/server';

module('integration:server-config', {
  beforeEach: function() {
    this.server = new Server({
      environment: 'development'
    });
    this.server.timing = 0;
  },
  afterEach: function() {
    this.server.shutdown();
  }
});

test("namespace can be configured", function(assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;

  server.namespace = 'api';
  server.get('/contacts', function() {
    return 123;
  });

  $.getJSON('/api/contacts', function(data) {
    assert.equal(data, 123);
    done();
  });
});

test("if passthrough is true, unhandled requests pass through", function(assert) {
  assert.expect(2);
  var done1 = assert.async();
  var done2 = assert.async();
  var server = this.server;

  server.loadConfig(function() {
    this.passthrough = true;
    this.get('/contacts', function() {
      return 123;
    });
  });

  $.ajax({
    method: "GET",
    url: "/contacts",
    success: function(data) {
      assert.equal(data, 123);
      done1();
    }
  });

  $.ajax({
    method: "GET",
    url: "/addresses",
    error: function(reason) {
      assert.equal(reason.status, 404);
      done2();
    }
  });
});

test("passthrough requests use namespace", function(assert) {
  var done = assert.async();
  var server = this.server;

  server.loadConfig(function() {
    this.namespace = 'api';
    this.passthrough = true;
  });

  $.ajax({
    method: 'GET',
    url: '/api/addresses',
    error: function(reason) {
      assert.equal(reason.status, 404);
      done();
    }
  });
});

test("passthrough requests use glob routes", function(assert) {
  var done = assert.async();
  var server = this.server;

  server.loadConfig(function() {
    this.passthrough = true;
  });

  $.ajax({
    method: 'GET',
    url: '/addresses/1/packages',
    error: function(reason) {
      assert.equal(reason.status, 404);
      done();
    }
  });
});
