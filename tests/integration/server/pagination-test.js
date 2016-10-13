import {module, test} from 'qunit';
import { Model, ActiveModelSerializer } from 'ember-cli-mirage';
import Server from 'ember-cli-mirage/server';

module('Integration | Server | Pagination', {
  beforeEach() {
    this.server = new Server({
      environment: 'test',
      models: {
        author: Model
      },
      serializers: {
        application: ActiveModelSerializer
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('get shorthand handles pagination with page[number] and page[size] params', function(assert) {
  assert.expect(2);
  let done = assert.async();

  this.server.db.loadData({
    authors: [
      { id: 1, name: 'Link' },
      { id: 2, name: 'Zelda' },
      { id: 3, name: 'Epona' }
    ]
  });

  this.server.get('/authors');

  $.ajax({
    method: 'GET',
    url: '/authors?page%5Bsize%5D=2&page%5Bnumber%5D=1'
  }).done(function(res, status, xhr) {
    assert.equal(xhr.status, 200);
    assert.deepEqual(res, {
      authors: [
        { id: '1', name: 'Link' },
        { id: '2', name: 'Zelda' }
      ],
      meta: {
        'total-pages': 2,
        'total-records': 3
      }
    });
    done();
  });
});
