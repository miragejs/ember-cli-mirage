import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Server, Model, JSONAPISerializer } from 'miragejs';
import EDModel, { attr } from '@ember-data/model';
import { pushMirageIntoStore as pushMirageIntoStoreTestSupport } from 'ember-cli-mirage/test-support';
import { pushMirageIntoStore } from 'ember-cli-mirage';

module('Unit | Utils | Push Mirage Into Store', function (hooks) {
  hooks.beforeEach(function () {
    this.server = new Server({
      serializers: {
        application: JSONAPISerializer,
      },
      models: {
        user: Model,
        blog: Model,
      },
    });

    this.server.create('user', {
      id: '1',
      name: 'Joe Brown',
    });

    this.server.create('user', {
      id: '2',
      name: 'Joe Black',
    });

    this.server.create('user', {
      id: '3',
      name: 'Jane Doe',
    });

    this.server.create('blog', {
      id: '1',
      name: 'Post 1',
    });

    this.server.create('blog', {
      id: '2',
      name: 'Post 2',
    });
  });

  hooks.afterEach(function () {
    this.server.shutdown();
  });

  module('from test support', function (hooks) {
    setupTest(hooks);
    hooks.beforeEach(function () {
      this.owner.register(
        'model:user',
        EDModel.extend({
          name: attr(),
        })
      );

      this.owner.register(
        'model:blog',
        EDModel.extend({
          text: attr(),
        })
      );

      this.store = this.owner.lookup('service:store');
    });

    test('can push records all the records without a config', function (assert) {
      pushMirageIntoStoreTestSupport();
      assert.strictEqual(this.store.peekAll('user').length, 3);
      assert.strictEqual(this.store.peekAll('blog').length, 2);
    });

    test('can push one resource as array', function (assert) {
      pushMirageIntoStoreTestSupport(['users']);
      assert.strictEqual(this.store.peekAll('user').length, 3);
      assert.strictEqual(this.store.peekAll('blog').length, 0);
    });

    test('can push one resource as config true', function (assert) {
      pushMirageIntoStoreTestSupport({
        users: true,
      });
      assert.strictEqual(this.store.peekAll('user').length, 3);
      assert.strictEqual(this.store.peekAll('blog').length, 0);
    });

    test('can push one resource as config where hash', function (assert) {
      pushMirageIntoStoreTestSupport({
        users: { name: 'Joe Brown' },
      });
      assert.strictEqual(this.store.peekAll('user').length, 1);
      assert.strictEqual(this.store.peekAll('blog').length, 0);
    });

    test('can push one resource as config where function', function (assert) {
      pushMirageIntoStoreTestSupport({
        users: (item) => item.name.includes('Joe'),
      });
      assert.strictEqual(this.store.peekAll('user').length, 2);
      assert.strictEqual(this.store.peekAll('blog').length, 0);
    });
  });

  module('direct import', function (hooks) {
    setupTest(hooks);

    hooks.beforeEach(function () {
      this.owner.register(
        'model:user',
        EDModel.extend({
          name: attr(),
        })
      );

      this.owner.register(
        'model:blog',
        EDModel.extend({
          text: attr(),
        })
      );

      this.store = this.owner.lookup('service:store');
    });

    test('can push records all the records without a config', function (assert) {
      pushMirageIntoStore(this.server, this.store);
      assert.strictEqual(this.store.peekAll('user').length, 3);
      assert.strictEqual(this.store.peekAll('blog').length, 2);
    });

    test('can push one resource as array', function (assert) {
      pushMirageIntoStore(this.server, this.store, ['users']);
      assert.strictEqual(this.store.peekAll('user').length, 3);
      assert.strictEqual(this.store.peekAll('blog').length, 0);
    });

    test('can push one resource as config true', function (assert) {
      pushMirageIntoStore(this.server, this.store, {
        users: true,
      });
      assert.strictEqual(this.store.peekAll('user').length, 3);
      assert.strictEqual(this.store.peekAll('blog').length, 0);
    });

    test('can push one resource as config where hash', function (assert) {
      pushMirageIntoStore(this.server, this.store, {
        users: { name: 'Joe Brown' },
      });
      assert.strictEqual(this.store.peekAll('user').length, 1);
      assert.strictEqual(this.store.peekAll('blog').length, 0);
    });

    test('can push one resource as config where function', function (assert) {
      pushMirageIntoStore(this.server, this.store, {
        users: (item) => item.name.includes('Joe'),
      });
      assert.strictEqual(this.store.peekAll('user').length, 2);
      assert.strictEqual(this.store.peekAll('blog').length, 0);
    });
  });
});
