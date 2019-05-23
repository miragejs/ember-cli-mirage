import {module, test} from 'qunit';
import Server from 'ember-cli-mirage/server';
import { Model } from 'ember-cli-mirage';
import { Factory } from '@miragejs/server';

module('Integration | Database', function(hooks) {
  hooks.beforeEach(function() {
    this.server = new Server({
      environment: 'development',
      scenarios: {
        default() {}
      },
      models: {
        author: Model
      },
      factories: {
        author: Factory
      },
      fixtures: {
        authors: [
          { id: 1, name: 'Zelda' }
        ]
      }
    });
  });

  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test(`[regression] When loaded, fixture files correctly update the database's autoincrement id`, function(assert) {
    this.server.loadFixtures();

    this.server.schema.authors.create({});

    let { authors } = this.server.db;
    assert.equal(authors.length, 2);
    assert.deepEqual(authors.map((a) => a.id), ['1', '2']);
  });
});
