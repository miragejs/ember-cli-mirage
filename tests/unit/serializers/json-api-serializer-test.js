import JSONAPISerializer from 'ember-cli-mirage/serializers/json-api-serializer';
import { module, test } from 'qunit';

module('Unit | Serializers | JSON API Serializer', function(hooks) {
  hooks.beforeEach(function() {
    this.serializer = new JSONAPISerializer();
  });

  test('it returns coalesce Ids if present', function(assert) {
    let request = { url: '/authors', queryParams: { 'filter[id]': '1,3' } };
    assert.deepEqual(this.serializer.getCoalescedIds(request), ['1', '3']);
  });

  test('it returns undefined coalesce Ids if not present', function(assert) {
    let request = { url: '/authors', queryParams: {} };
    assert.strictEqual(this.serializer.getCoalescedIds(request), undefined);
  });

  test('💻 it parses the pagination query params as expected', function(assert) {
    this.serializer = new JSONAPISerializer(null, null, {});
    assert.equal(this.serializer.hasPaginationQueryParams(), false);
    assert.equal(this.serializer.getPaginationQueryParams(), null);

    this.serializer = new JSONAPISerializer(null, null, { queryParams: { 'page[number]': 1 } });
    assert.equal(this.serializer.hasPaginationQueryParams(), false);
    assert.equal(this.serializer.getPaginationQueryParams(), null);

    this.serializer = new JSONAPISerializer(null, null, { queryParams: { 'page[size]': 20 } });
    assert.equal(this.serializer.hasPaginationQueryParams(), true);
    assert.deepEqual(this.serializer.getPaginationQueryParams(), { number: 1, size: 20 });

    this.serializer = new JSONAPISerializer(null, null, { queryParams: { 'page[number]': 2, 'page[size]': 20 } });
    assert.equal(this.serializer.hasPaginationQueryParams(), true);
    assert.deepEqual(this.serializer.getPaginationQueryParams(), { number: 2, size: 20 });
  });

  test('💻 it parses the sort query param as expected', function(assert) {
    this.serializer = new JSONAPISerializer(null, null, {});
    assert.equal(this.serializer.hasSortingQueryParam(), false);
    assert.equal(this.serializer.getSortingQueryParam(), null);

    this.serializer = new JSONAPISerializer(null, null, { queryParams: { sort: '' } });
    assert.equal(this.serializer.hasSortingQueryParam(), false);
    assert.equal(this.serializer.getSortingQueryParam(), null);

    this.serializer = new JSONAPISerializer(null, null, { queryParams: { sort: 'make' } });
    assert.equal(this.serializer.hasSortingQueryParam(), true);
    assert.deepEqual(this.serializer.getSortingQueryParam(), [
      { direction: 'asc', key: 'make' }
    ]);

    this.serializer = new JSONAPISerializer(null, null, { queryParams: { sort: '-make' } });
    assert.equal(this.serializer.hasSortingQueryParam(), true);
    assert.deepEqual(this.serializer.getSortingQueryParam(), [
      { direction: 'desc', key: 'make' }
    ]);

    this.serializer = new JSONAPISerializer(null, null, { queryParams: { sort: '-make,model' } });
    assert.equal(this.serializer.hasSortingQueryParam(), true);
    assert.deepEqual(this.serializer.getSortingQueryParam(), [
      { direction: 'desc', key: 'make' },
      { direction: 'asc', key: 'model' }
    ]);
  });
});
