// import Model from 'ember-cli-mirage/orm/model';
// import Schema from 'ember-cli-mirage/orm/schema';
import { Server, Model } from 'ember-cli-mirage';
import Inflector from 'ember-inflector';
import { module, test } from 'qunit';

module('Integration | ORM | inflector-collectionName integration', function(hooks) {
  hooks.beforeEach(function() {
    Inflector.inflector.irregular('head-of-state', 'heads-of-state');

    this.server = new Server({
      models: {
        headOfState: Model.extend()
      },
      inflector: Inflector.inflector
    });
  });

  hooks.beforeEach(function() {
    this.server.shutdown();
  });

  test(' [regression] collection creation respects irregular plural rules', function(assert) {
    assert.equal(this.server.db._collections.length, 1);
    assert.equal(this.server.db._collections[0].name, 'headsOfState');
  });
});
