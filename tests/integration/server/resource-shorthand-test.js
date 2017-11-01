import {module, test} from 'qunit';
import { Model, ActiveModelSerializer } from 'ember-cli-mirage';
import Server from 'ember-cli-mirage/server';
import fetch from 'fetch';

module('Integration | Server | Resource shorthand', function(hooks) {
  hooks.beforeEach(function() {
    this.server = new Server({
      environment: 'test',
      models: {
        contact: Model,
        blogPost: Model
      },
      serializers: {
        application: ActiveModelSerializer
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  });

  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('resource generates get shorthand for index action', async function(assert) {
    assert.expect(2);

    this.server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' },
        { id: 2, name: 'Zelda' }
      ]
    });

    this.server.resource('contacts');

    let response = await fetch('/contacts');
    assert.equal(response.status, 200, 'Should receive a 200 response from resource index action');
    let results = await response.json();
    assert.deepEqual(
      results,
      { contacts: [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }] },
      'Should receive all resources from the DB'
    );
  });

  test('resource generates get shorthand for show action', async function(assert) {
    assert.expect(2);

    this.server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' },
        { id: 2, name: 'Zelda' }
      ]
    });

    this.server.resource('contacts');

    let response = await fetch('/contacts/2');
    assert.equal(response.status, 200, 'Should receive a 200 response from resource show action');
    let results = await response.json();
    assert.deepEqual(
      results,
      { contact: { id: '2', name: 'Zelda' } },
      'Should receive the requested resource from the DB'
    );
  });

  test('resource generates post shorthand for create action', async function(assert) {
    let { server } = this;
    assert.expect(2);

    server.resource('contacts');

    let options = {
      method: 'POST',
      body: JSON.stringify({
        contact: {
          name: 'Zelda'
        }
      })
    };

    let response = await fetch('/contacts', options);
    assert.equal(response.status, 201, 'Should receive 201 response from resource create action');
    assert.equal(server.db.contacts.length, 1, 'Should create a new record in the DB');
  });

  test('resource generates put shorthand for update action', async function(assert) {
    let { server } = this;
    assert.expect(2);

    this.server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' }
      ]
    });

    server.resource('contacts');

    let options = {
      method: 'PUT',
      body: JSON.stringify({
        contact: {
          name: 'Zelda'
        }
      })
    };

    let response = await fetch('/contacts/1', options);
    assert.equal(response.status, 200, 'Should receive 200 response from resource update action');
    assert.equal(server.db.contacts[0].name, 'Zelda', 'Should update record in the DB');
  });

  test('resource generates patch shorthand for update action', async function(assert) {
    let { server } = this;
    assert.expect(2);

    this.server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' }
      ]
    });

    server.resource('contacts');

    let options = {
      method: 'PATCH',
      body: JSON.stringify({
        contact: {
          name: 'Zelda'
        }
      })
    };

    let response = await fetch('/contacts/1', options);
    assert.equal(response.status, 200, 'Should receive 200 response from resource update action');
    assert.equal(server.db.contacts[0].name, 'Zelda', 'Should update record in the DB');
  });

  test('resource generates delete shorthand for delete action', async function(assert) {
    let { server } = this;
    assert.expect(2);

    this.server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' }
      ]
    });

    server.resource('contacts');

    let response = await fetch('/contacts/1', { method: 'DELETE' });
    assert.equal(response.status, 204, 'Should receive 204 response from the resource delete action');
    assert.equal(server.db.contacts.length, 0, 'Should delete record in the DB');
  });

  test('resource accepts a custom path for a resource', async function(assert) {
    assert.expect(6);

    this.server.db.loadData({
      blogPosts: [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' }
      ]
    });

    this.server.resource('blog-posts', { path: '/custom-posts-path' });

    let response = await fetch('/custom-posts-path');
    assert.equal(response.status, 200, 'Should receive a 200 response from resource index action');

    response = await fetch('/custom-posts-path/2');
    assert.equal(response.status, 200, 'Should receive a 200 response from resource show action');

    let options = {
      method: 'POST',
      body: JSON.stringify({
        blogPost: {
          title: 'Post 3'
        }
      })
    };

    response = await fetch('/custom-posts-path', options);
    assert.equal(response.status, 201, 'Should receive 201 response from resource create action');

    options = {
      method: 'PUT',
      body: JSON.stringify({
        contact: {
          name: 'Zelda'
        }
      })
    };

    response = await fetch('/custom-posts-path/1', options);
    assert.equal(response.status, 200, 'Should receive 200 response from resource update action with PUT');

    options = {
      method: 'PATCH',
      body: JSON.stringify({
        contact: {
          name: 'Zelda'
        }
      })
    };

    response = await fetch('/custom-posts-path/1', options);
    assert.equal(response.status, 200, 'Should receive 200 response from resource update action with PATCH');

    response = await fetch('/custom-posts-path/1', { method: 'DELETE' });
    assert.equal(response.status, 204, 'Should receive 204 response from the resource delete action');
  });

  test('resource accepts singular name', async function(assert) {
    assert.expect(2);

    this.server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' },
        { id: 2, name: 'Zelda' }
      ]
    });

    this.server.resource('contact');
    // this.server.resource('blog-post', { path: '/posts' });

    let response = await fetch('/contacts');
    assert.equal(response.status, 200, 'Should receive a 200 response from resource index action');
    let results = await response.json();
    assert.deepEqual(
      results,
      { contacts: [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }] },
      'Should receive all resources from the DB'
    );
  });

  test('resource does not accept both :all and :except options', function(assert) {
    let { server } = this;

    assert.throws(() => {
      server.resource('contacts', { only: ['index'], except: ['create'] });
    }, 'cannot use both :only and :except options');
  });

  test('resource generates shorthands which are whitelisted by :only option', async function(assert) {
    let { server } = this;
    assert.expect(1);

    server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' },
        { id: 2, name: 'Zelda' }
      ]
    });

    server.resource('contacts', { only: ['index'] });

    let response = await fetch('/contacts');
    assert.equal(response.status, 200, 'Should receive a 200 response from resource index action');
  });

  test('resource does not generate shorthands which are not whitelisted with :only option', async function(assert) {
    let { server } = this;
    assert.expect(5);

    server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' }
      ]
    });

    server.resource('contacts', { only: ['index'] });

    try {
      await fetch('/contacts/1');
    } catch(e) {
      assert.ok(
        e.message.indexOf("Mirage: Your Ember app tried to GET '/contacts/1'") > -1,
        'Should receive an error from Mirage when requesting the show action'
      );
    }

    try {
      let options = {
        method: 'POST',
        data: JSON.stringify({
          contact: {
            name: 'Zelda'
          }
        })
      };
      await fetch('/contacts', options);
    } catch(e) {
      assert.ok(
        e.message.indexOf("Mirage: Your Ember app tried to POST '/contacts'") > -1,
        'Should receive an error from Mirage when requesting the create action'
      );
    }

    try {
      let options = {
        method: 'PUT',
        data: JSON.stringify({
          contact: {
            name: 'Zelda'
          }
        })
      };
      await fetch('/contacts/1', options);
    } catch(e) {
      assert.ok(
        e.message.indexOf("Mirage: Your Ember app tried to PUT '/contacts/1'") > -1,
        'Should receive an error from Mirage when requesting the update action with PUT'
      );
    }

    try {
      let options = {
        method: 'PATCH',
        data: JSON.stringify({
          contact: {
            name: 'Zelda'
          }
        })
      };
      await fetch('/contacts/1', options);
    } catch(e) {
      assert.ok(
        e.message.indexOf("Mirage: Your Ember app tried to PATCH '/contacts/1'") > -1,
        'Should receive an error from Mirage when requesting the update action with PATCH'
      );
    }

    try {
      await fetch('/contacts/1', { method: 'DELETE' });
    } catch(e) {
      assert.ok(
        e.message.indexOf("Mirage: Your Ember app tried to DELETE '/contacts/1'") > -1,
        'Should receive an error from Mirage when requesting the delet action'
      );
    }
  });

  test('resource generates shorthands which are not blacklisted by :except option', async function(assert) {
    let { server } = this;
    assert.expect(2);

    server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' }
      ]
    });

    server.resource('contacts', { except: ['create', 'update', 'delete'] });

    let response = await fetch('/contacts');
    assert.equal(response.status, 200, 'Should receive a 200 response from resource index action');

    response = await fetch('/contacts/1');
    assert.equal(response.status, 200, 'Should receive a 200 response from resource show action');
  });

  test('resource does not generate shorthands which are blacklisted by :except option', async function(assert) {
    let { server } = this;
    assert.expect(4);

    server.db.loadData({
      contacts: [
        { id: 1, name: 'Link' }
      ]
    });

    server.resource('contacts', { except: ['create', 'update', 'delete'] });

    try {
      let options = {
        method: 'POST',
        data: JSON.stringify({
          contact: {
            name: 'Zelda'
          }
        })
      };
      await fetch('/contacts', options);
    } catch(e) {
      assert.ok(
        e.message.indexOf("Mirage: Your Ember app tried to POST '/contacts'") > -1,
        'Should receive an error from Mirage when requesting the create action'
      );
    }

    try {
      let options = {
        method: 'PUT',
        data: JSON.stringify({
          contact: {
            name: 'Zelda'
          }
        })
      };
      await fetch('/contacts/1', options);
    } catch(e) {
      assert.ok(
        e.message.indexOf("Mirage: Your Ember app tried to PUT '/contacts/1'") > -1,
        'Should receive an error from Mirage when requesting the update action with PUT'
      );
    }

    try {
      let options = {
        method: 'PATCH',
        data: JSON.stringify({
          contact: {
            name: 'Zelda'
          }
        })
      };
      await fetch('/contacts/1', options);
    } catch(e) {
      assert.ok(
        e.message.indexOf("Mirage: Your Ember app tried to PATCH '/contacts/1'") > -1,
        'Should receive an error from Mirage when requesting the update action with PATCH'
      );
    }

    try {
      await fetch('/contacts/1', { method: 'DELETE' });
    } catch(e) {
      assert.ok(
        e.message.indexOf("Mirage: Your Ember app tried to DELETE '/contacts/1'") > -1,
        'Should receive an error from Mirage when requesting the delet action'
      );
    }
  });
});
