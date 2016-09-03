import {module, test} from 'qunit';
import Server from 'ember-cli-mirage/server';

module('Integration | Server Config', {
  beforeEach: function() {
    this.server = new Server({
      environment: 'development'
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach: function() {
    this.server.shutdown();
  }
});

test("namespace can be configured", function(assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;

  var contacts = [
    {id: 1, name: 'Link'},
    {id: 2, name: 'Zelda'},
  ];
  server.db.loadData({
    contacts: contacts
  });
  server.namespace = 'api';
  server.get('/contacts');

  $.getJSON('/api/contacts', function(data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});

test("urlPrefix can be configured", function(assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;

  var contacts = [
    {id: 1, name: 'Link'},
    {id: 2, name: 'Zelda'},
  ];
  server.db.loadData({
    contacts: contacts
  });
  server.urlPrefix = 'http://localhost:3000';
  server.get('/contacts');

  $.getJSON('http://localhost:3000/contacts', function(data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});

test("urlPrefix and namespace can be configured simultaneously", function(assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;

  var contacts = [
    {id: 1, name: 'Link'},
    {id: 2, name: 'Zelda'},
  ];
  server.db.loadData({
    contacts: contacts
  });
  server.urlPrefix = 'http://localhost:3000';
  server.namespace = 'api';
  server.get('/contacts');

  $.getJSON('http://localhost:3000/api/contacts', function(data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});

test("fully qualified domain names can be used in configuration", function(assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;

  var contacts = [
    {id: 1, name: 'Link'},
    {id: 2, name: 'Zelda'},
  ];
  server.db.loadData({
    contacts: contacts
  });
  server.get('http://example.org/api/contacts', 'contacts');

  $.getJSON('http://example.org/api/contacts', function(data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});

test("urlPrefix/namespace are ignored when fully qualified domain names are used in configuration", function(assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;

  var contacts = [
    {id: 1, name: 'Link'},
    {id: 2, name: 'Zelda'},
  ];
  server.db.loadData({
    contacts: contacts
  });
  this.urlPrefix = 'https://example.net';
  server.get('http://example.org/api/contacts', 'contacts');

  $.getJSON('http://example.org/api/contacts', function(data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});

test('blank urlPrefix and namespace ends up as /', function(assert) {
  assert.expect(1);
  let done = assert.async();

  let contacts = [
    { id: '1', name: 'Link' },
    { id: '2', name: 'Zelda' }
  ];
  this.server.db.loadData({
    contacts
  });
  this.server.namespace = '';
  this.server.urlPrefix = '';
  this.server.get('contacts');

  $.getJSON('/contacts', function(data) {
    assert.deepEqual(data, { contacts });
    done();
  });
});

test('namespace with no slash gets one', function(assert) {
  assert.expect(1);
  let done = assert.async();

  let contacts = [
    { id: '1', name: 'Link' },
    { id: '2', name: 'Zelda' }
  ];
  this.server.db.loadData({
    contacts
  });
  this.server.namespace = 'api';
  this.server.get('contacts');

  $.getJSON('/api/contacts', function(data) {
    assert.deepEqual(data, { contacts });
    done();
  });
});

test('urlPrefix with no slash gets one', function(assert) {
  assert.expect(1);
  let done = assert.async();

  let contacts = [
    { id: '1', name: 'Link' },
    { id: '2', name: 'Zelda' }
  ];
  this.server.db.loadData({
    contacts
  });
  this.server.urlPrefix = 'pre';
  this.server.get('contacts');

  $.getJSON('/pre/contacts', function(data) {
    assert.deepEqual(data, { contacts });
    done();
  });
});

test('namespace of / works', function(assert) {
  assert.expect(1);
  let done = assert.async();

  let contacts = [
    { id: '1', name: 'Link' },
    { id: '2', name: 'Zelda' }
  ];
  this.server.db.loadData({
    contacts
  });
  this.server.namespace = '/';
  this.server.get('contacts');

  $.getJSON('/contacts', function(data) {
    assert.deepEqual(data, { contacts });
    done();
  });
});
