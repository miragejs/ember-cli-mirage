import PagedPaginator from 'ember-cli-mirage/utils/paged-paginator';

import {module, test} from 'qunit';

module('Unit | PagedPaginator');

test('paginate method performs pagination when page[number] and page[size] query params are present and adds meta to collection returning paginated collection', function(assert) {
  let serializerStub = {
    serializeMetaForPagination(totalPages, totalRecords, collection) {
      return {
        'total-pages': totalPages,
        'total-records': totalRecords
      };
    }
  };
  let paginator = new PagedPaginator(serializerStub);
  let models = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
  ];
  let collectionStub = { models };
  let request = {
    queryParams: {
      'page[number]': '1',
      'page[size]': '2'
    }
  };
  let paginatedCollection = paginator.paginate(request, collectionStub);

  assert.equal(paginatedCollection.models.length, 2);
  assert.deepEqual(paginatedCollection.models, [{ id: 1 }, { id: 2 }]);
  assert.deepEqual(paginatedCollection.meta, { 'total-pages': 3, 'total-records': 5 });

  request = {
    queryParams: {
      'page[number]': '2',
      'page[size]': '2'
    }
  };
  models = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
  ];
  collectionStub = { models };
  paginatedCollection = paginator.paginate(request, collectionStub);

  assert.equal(paginatedCollection.models.length, 2);
  assert.deepEqual(paginatedCollection.models, [{ id: 3 }, { id: 4 }]);
  assert.deepEqual(paginatedCollection.meta, { 'total-pages': 3, 'total-records': 5 });

  request = {
    queryParams: {
      'page[number]': '3',
      'page[size]': '2'
    }
  };
  models = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
  ];
  collectionStub = { models };
  paginatedCollection = paginator.paginate(request, collectionStub);

  assert.equal(paginatedCollection.models.length, 1);
  assert.deepEqual(paginatedCollection.models, [{ id: 5 }]);
  assert.deepEqual(paginatedCollection.meta, { 'total-pages': 3, 'total-records': 5 });

  request = {
    queryParams: {
      'page[number]': '4',
      'page[size]': '2'
    }
  };
  models = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
  ];
  collectionStub = { models };
  paginatedCollection = paginator.paginate(request, collectionStub);

  assert.equal(paginatedCollection.models.length, 0);
  assert.deepEqual(paginatedCollection.models, []);
  assert.deepEqual(paginatedCollection.meta, { 'total-pages': 3, 'total-records': 5 });
});

test('paginate method returns original collection when page[number] and page[size] query params are not present', function(assert) {
  let paginator = new PagedPaginator();
  let models = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
  ];
  let collectionStub = { models };
  let request = {
    queryParams: {
      'page[number]': '1'
    }
  };
  let paginatedCollection = paginator.paginate(request, collectionStub);

  assert.equal(paginatedCollection.models.length, 5);
  assert.deepEqual(paginatedCollection.models, models);
  assert.deepEqual(paginatedCollection.meta, undefined);
});

test('shouldPaginate returns true if page[number] and page[size] query params are present', function(assert) {
  let paginator = new PagedPaginator();
  let request = {
    queryParams: {
      'page[number]': '1',
      'page[size]': '10'
    }
  };

  assert.ok(paginator.shouldPaginate(request));

  request = {
    queryParams: {
      'page[number]': '1'
    }
  };

  assert.ok(!paginator.shouldPaginate(request));

  request = {
    queryParams: {
      'page[size]': '10'
    }
  };

  assert.ok(!paginator.shouldPaginate(request));

  request = {
    queryParams: {}
  };

  assert.ok(!paginator.shouldPaginate(request));
});

test('extractPageNumber returns page number from request as numeric value', function(assert) {
  let paginator = new PagedPaginator();
  let request = {
    queryParams: {
      'page[number]': '1',
      'page[size]': '10'
    }
  };

  assert.equal(paginator.extractPageNumber(request), 1);
});

test('extractPageSize returns page size from request as numeric value', function(assert) {
  let paginator = new PagedPaginator();
  let request = {
    queryParams: {
      'page[number]': '1',
      'page[size]': '10'
    }
  };

  assert.equal(paginator.extractPageSize(request), 10);
});

test('serializeMeta returns meta data from serializer', function(assert) {
  let serializerStub = {
    serializeMetaForPagination(totalPages, totalRecords, collection) {
      return {
        'total-pages': totalPages,
        'total-records': totalRecords
      };
    }
  };
  let paginator = new PagedPaginator(serializerStub);

  assert.deepEqual(paginator.serializeMeta(1, 10), { 'total-pages': 1, 'total-records': 10 });
});
