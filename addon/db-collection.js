import _assign from 'lodash/object/assign';
import _isArray from 'lodash/lang/isArray';
import _isEqual from 'lodash/lang/isEqual';
import _sortBy from 'lodash/collection/sortBy';

function duplicate(data) {
  if (_isArray(data)) {
    return data.map(function(el) {
      return _assign({}, el);
    });
  } else {
    return _assign({}, data);
  }
}

/*
  A collection of db records i.e. a database table.
*/
class DbCollection {

  constructor(name, initialData) {
    this.name = name;
    this._records = [];
    this.identityManager = new IdentityManagaer();

    if (initialData) {
      this.insert(initialData);
    }
  }

  /*
    Returns a copy of the data, to prevent inadvertant data manipulation.
  */
  all() {
    return duplicate(this._records);
  }

  insert(data) {
    if (!_isArray(data)) {
      return this._insertRecord(data);
    } else {
      // Need to sort in order to ensure IDs inserted in the correct order
      return _sortBy(data, 'id').map(this._insertRecord.bind(this));
    }
  }

  find(ids) {
    if (_isArray(ids)) {
      let records = this._findRecords(ids)
        .filter(r => r !== undefined);

      // Return a copy
      return records.map(duplicate);

    } else {
      let record = this._findRecord(ids);
      if (!record) { return null; }

      // Return a copy
      return duplicate(record);
    }
  }

  where(query) {
    let records = this._findRecordsWhere(query);

    return records.map(duplicate);
  }

  firstOrCreate(query, attributesForNew={}) {
    let queryResult = this.where(query);
    let record = queryResult[0];

    if (record) {
      return record;
    } else {
      let mergedAttributes = _assign(attributesForNew, query);
      let createdRecord = this.insert(mergedAttributes);

      return createdRecord;
    }
  }

  update(target, attrs) {
    let records;

    if (typeof attrs === 'undefined') {
      attrs = target;
      let changedRecords = [];

      this._records.forEach(record => {
        let oldRecord = _assign({}, record);

        this._updateRecord(record, attrs);

        if (!_isEqual(oldRecord, record)) {
          changedRecords.push(record);
        }
      });

      return changedRecords;

    } else if (typeof target === 'number' || typeof target === 'string') {
      let id = target;
      let record = this._findRecord(id);

      this._updateRecord(record, attrs);

      return record;

    } else if (_isArray(target)) {
      let ids = target;
      records = this._findRecords(ids);

      records.forEach(record => {
        this._updateRecord(record, attrs);
      });

      return records;

    } else if (typeof target === 'object') {
      let query = target;
      records = this._findRecordsWhere(query);

      records.forEach(record => {
        this._updateRecord(record, attrs);
      });

      return records;
    }
  }

  remove(target) {
    let records;

    if (typeof target === 'undefined') {
      this._records = [];
      this.identityManager.reset();

    } else if (typeof target === 'number' || typeof target === 'string') {
      let record = this._findRecord(target);
      let index = this._records.indexOf(record);
      this._records.splice(index, 1);

    } else if (_isArray(target)) {
      records = this._findRecords(target);
      records.forEach(record =>  {
        let index = this._records.indexOf(record);
        this._records.splice(index, 1);
      });

    } else if (typeof target === 'object') {
      records = this._findRecordsWhere(target);
      records.forEach(record =>  {
        let index = this._records.indexOf(record);
        this._records.splice(index, 1);
      });
    }
  }


  /*
    Private methods.

    These return the actual db objects, whereas the public
    API query methods return copies.
  */

  _findRecord(id) {
    id = id.toString();

    let record = this._records.filter(obj => {
      let recordId = obj.id;
      if(typeof recordId === 'string' && allDigitsRegex.test(recordId)) {
        recordId = parseInt(recordId, 10);
      }
      return recordId === id;
    })[0];

    return record;
  }

  _findRecords(ids) {
    let records = ids.map(id => this._findRecord(id));

    return records;
  }

  _findRecordsWhere(query) {
    let records = this._records;

    function defaultQueryFunction (record) {
      let keys = Object.keys(query);

      return keys.every(function(key) {
        return String(record[key]) === String(query[key]);
      });
    }

    let queryFunction = typeof query === 'object' ? defaultQueryFunction : query;

    return records.filter(queryFunction);
  }

  _insertRecord(data) {
    let attrs = duplicate(data);

    if (attrs && (attrs.id === undefined || attrs.id === null)) {
      attrs.id = this.identityManager.fetch();
    } else {
      attrs.id = attrs.id.toString();

      this.identityManager.set(attrs.id);
    }

    this._records.push(attrs);

    return duplicate(attrs);
  }

  _updateRecord(record, attrs) {
    let targetId = (attrs && attrs.hasOwnProperty('id')) ? attrs.id.toString() : null;
    let currentId = record.id;

    if (targetId && currentId !== targetId) {
      throw new Error('Updating the ID of a record is not permitted');
    }

    for (let attr in attrs) {
      if (attr === 'id') { continue; }

      record[attr] = attrs[attr];
    }
  }
}

class IdentityManagaer {
  constructor() {
    this._currentValue = null;
    this._ids = {};
  }

  get() {
    return this._currentValue || 1;
  }

  set(n) {
    if (this._ids[n]) {
      throw new Error(`Attempting to use the ID ${n}, but it's already been used`);
    }

    if (typeof n === 'number' && n > this._currentValue) {
      this._currentValue = n;
    }

    this._ids[n] = true;
  }

  inc() {
    let nextValue = this.get() + 1;

    this._currentValue = nextValue;

    return nextValue;
  }

  fetch() {
    let id = this.get();

    this._ids[id] = true;

    this.inc();

    return id.toString();
  }

  reset() {
    this._ids = {};
    this._currentValue = null;
  }
}

export default DbCollection;
