import {module, test} from 'qunit';
import Server from 'ember-cli-mirage/server';

module('integration:server-config', {
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
