import _assign from 'lodash/object/assign';

export default class PagedPaginator {
  constructor(serializerOrRegistry) {
    this.serializerOrRegistry = serializerOrRegistry;
  }

  paginate(request, collection) {
    if (this.shouldPaginate(request)) {
      let pageNumber = this.extractPageNumber(request);
      let pageSize = this.extractPageSize(request);
      let totalPages = Math.ceil(collection.models.length / pageSize);
      let totalRecords = collection.models.length;
      let fromIndex = (pageNumber - 1) * pageSize;
      let meta = this.serializeMeta(totalPages, totalRecords, collection);

      collection.models = collection.models.splice(fromIndex, pageSize);
      collection.meta = _assign(collection.meta || {}, meta);
    }
    return collection;
  }

  shouldPaginate({ queryParams }) {
    return queryParams && queryParams['page[number]'] && queryParams['page[size]'];
  }

  extractPageNumber({ queryParams }) {
    return Number(queryParams['page[number]']);
  }

  extractPageSize({ queryParams }) {
    return Number(queryParams['page[size]']);
  }

  serializeMeta(totalPages, totalRecords, collection) {
    return this.serializerOrRegistry.serializeMetaForPagination(totalPages,
      totalRecords, collection);
  }
}
