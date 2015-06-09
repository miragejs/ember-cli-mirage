/*
  A manager for events to be processed
*/

export default function() {
  this.events = [];
  this.factories = {};

  this.loadFactories = function(factories) {
    this.factories = factories;
  };

  this.addEvent = function(name, params) {
    var factory = this.factories[name];

    if(!factory) {
      throw 'No event factory defined for ' + name + '.';
    }

    this.events.push({
      name: name,
      params: params,
      factory: factory
    });
  };

  this.nextEvent = function() {
    return this.events[this.events.length - 1];
  };

  this.length = function() {
    return this.events.length;
  };

  return this;
}
