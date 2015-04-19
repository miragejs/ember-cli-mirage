import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from '../helpers/start-app';

var App;
var contact;
var appStore;

module('Acceptance: Uploads', {
  beforeEach: function() {
    App = startApp();
    appStore = App.__container__.lookup('store:main');
    server.timing = 400;
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});


test('mirage can stream upload events', function(assert) {
  var done = assert.async();
  var data = new window.FormData();
  var xhr  = new window.XMLHttpRequest();
  var progressEventCount = 0;
  xhr.onload = function(event) {
    var jsonResponse = JSON.parse(event.target.responseText);
    assert.deepEqual(jsonResponse, { filename: "thriller.mp3" }, 'The response is still the same');
    assert.equal(progressEventCount, 6, 'The upload event has been triggered 6 times before the completition');
    done();
  };
  xhr.upload.onprogress = function(e) {
    progressEventCount++;
  };
  xhr.open('POST', '/uploads', true);
  xhr.send(data);
});
