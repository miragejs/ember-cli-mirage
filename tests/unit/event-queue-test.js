import EventQueue from 'ember-cli-mirage/event-queue';
import {module, test} from 'qunit';
import Factory from 'ember-cli-mirage/factory';

var eventQueue;

module('mirage:event-queue');

test('it can be instantiated', function(assert) {
  var eventQueue = new EventQueue();
  assert.ok(eventQueue);
});

module('mirage:eventQueue#addEvent', {
  beforeEach: function() {
    eventQueue = new EventQueue();
  }
});

test('it can queue an event', function(assert) {
  var fileAddFactory = Factory.extend({ name: 'ben.jpg' });
  eventQueue.loadFactories({ 'file-add': fileAddFactory });
  assert.equal(eventQueue.length(), 0);

  eventQueue.addEvent('file-add', { name: 'ben2.jpg' });
  assert.equal(eventQueue.length(), 1);

  var event = eventQueue.nextEvent();
  assert.equal(event.name, 'file-add');
  assert.deepEqual(event.params, { name: 'ben2.jpg' });
  assert.equal(event.factory, fileAddFactory);
});

test('it will not queue an event without a factory', function(assert) {
  assert.throws(function() {
    eventQueue.addEvent('file-add', { name: 'ben2.jpg' });
  });
});
