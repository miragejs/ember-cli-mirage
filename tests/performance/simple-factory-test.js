import { module } from 'qunit';
import { Model } from 'ember-cli-mirage';
import { Factory } from '@miragejs/server';
import Server from 'ember-cli-mirage/server';
import { perfTest } from './utils';

module('Performance | Factory | Simple', {
  beforeEach() {
    this.Car = Model.extend();
    this.CarFactory = Factory.extend({
      make: 'Fjord',
      model: 'Wagon',
      year: '1886'
    });

    this.server = new Server({
      environment: 'test',
      models: {
        car: this.Car
      },
      factories: {
        car: this.CarFactory
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach() {
    this.server.shutdown();
  }
});

const carMaker = (count) => {
  server.createList('car', count);
};

perfTest(50, 'models', carMaker);
perfTest(500, 'models', carMaker);
perfTest(5000, 'models', carMaker);
