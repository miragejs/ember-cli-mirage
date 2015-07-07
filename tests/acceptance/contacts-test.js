import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from '../helpers/start-app';

var App;
var contacts;

module('Acceptance: Contacts', {
  beforeEach: function() {
    App = startApp();
    contacts = server.createList('contact', 2);
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test("I can view the contacts", function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentRouteName(), 'contacts');
    assert.equal( find('p').length, 2 );
    assert.equal( find('p:first').text(), contacts[0].name );
  });
});

test("I can create a new contact", function(assert) {
  visit('/');
  fillIn('input', 'Ganon');
  click('button:contains(Create)');

  andThen(function() {
    assert.equal(currentRouteName(), 'contacts');
    assert.equal( find('p').length, 3 );
    assert.equal( find('p:last').text(), 'Ganon' );
  });
});

test("If the server errors on /contacts, the first error message should show", function(assert) {
  server.get('/contacts', {
    errors: ['improper auth']
  }, 404);

  visit('/');

  andThen(function() {
    assert.equal( find('.error span').text(), 'improper auth' );
  });
});
