import { singularize, pluralize, camelize, dasherize } from '../utils/inflector';
import Association from './associations/association';
import Collection from './collection';
import _isArray from 'lodash/lang/isArray';

export default function(db) {

  if (!db) {
    throw 'Mirage: A schema requires a db';
  }

  this.db = db;
  this._registry = {};

  this.registerModels = function(hash = {}) {
    Object.keys(hash).forEach(function(key) {
      this.registerModel(key, hash[key]);
    }, this);
  };

  this.registerModel = function(type, ModelClass) {
    type = camelize(type);

    // Avoid mutating original class, because we may want to reuse it across many tests
    ModelClass = ModelClass.extend();

    // Store model & fks in registry
    this._registry[type] = this._registry[type] || {class: null, foreignKeys: []}; // we may have created this key before, if another model added fks to it
    this._registry[type].class = ModelClass;

    // Set up associations
    ModelClass.prototype.hasManyAssociations = {};   // a registry of the model's hasMany associations. Key is key from model definition, value is association instance itself
    ModelClass.prototype.belongsToAssociations = {}; // a registry of the model's belongsTo associations. Key is key from model definition, value is association instance itself
    ModelClass.prototype.associationKeys = [];       // ex: address.user, user.addresses
    ModelClass.prototype.associationIdKeys = [];     // ex: address.user_id, user.address_ids. may or may not be a fk.

    for (var associationProperty in ModelClass.prototype) {
      if (ModelClass.prototype[associationProperty] instanceof Association) {
        let association = ModelClass.prototype[associationProperty];
        let associationModelName = association.modelName || dasherize(singularize(associationProperty));
        association.owner = dasherize(type);
        association.target = associationModelName;

        // Update the registry with this association's foreign keys. This is
        // essentially our "db migration", since we must know about the fks.
        var result = association.getForeignKeyArray();
        var fkHolder = result[0];
        var fk = result[1];
        this._addForeignKeyToRegistry(fkHolder, fk);

        // Augment the Model's class with any methods added by this association
        association.addMethodsToModelClass(ModelClass, associationProperty, this);
      }
    }

    // Create a db collection for this model, if doesn't exist
    var collection = pluralize(type);
    if (!this.db[collection]) {
      this.db.createCollection(collection);
    }

    // Create the entity methods
    this[type] = {
      new: (attrs) => this.new(type, attrs),
      create: (attrs) => this.create(type, attrs),
      all: (attrs) => this.all(type, attrs),
      find: (attrs) => this.find(type, attrs),
      where: (attrs) => this.where(type, attrs)
    };

    return this;
  };

  this.new = function(type, attrs) {
    return this._instantiateModel(dasherize(type), attrs);
  };

  this.create = function(type, attrs) {
    var collection = this._collectionForType(type);
    var augmentedAttrs = collection.insert(attrs);

    return this._instantiateModel(dasherize(type), augmentedAttrs);
  };

  this.all = function(type) {
    var collection = this._collectionForType(type);

    return this._hydrate(collection, dasherize(type));
  };

  this.find = function(type, ids) {
    var collection = this._collectionForType(type);
    var records = collection.find(ids);

    if (_isArray(ids)) {
      if (records.length !== ids.length) {
        throw 'Couldn\'t find all ' + pluralize(type) + ' with ids: (' + ids.join(',') + ') (found ' + records.length + ' results, but was looking for ' + ids.length + ')';
      }
    }

    return this._hydrate(records, dasherize(type));
  };

  this.where = function(type, query) {
    var collection = this._collectionForType(type);
    var records = collection.where(query);

    return this._hydrate(records, dasherize(type));
  };

  /*
    Private methods
  */
  this._collectionForType = function(type) {
    var collection = pluralize(camelize(type));
    if (!this.db[collection]) {
      throw 'Mirage: You\'re trying to find model(s) of type ' + type + ' but this collection doesn\'t exist in the database.';
    }

    return this.db[collection];
  };

  this._addForeignKeyToRegistry = function(type, fk) {
    this._registry[type] = this._registry[type] || {class: null, foreignKeys: []};
    this._registry[type].foreignKeys.push(fk);
  };

  this._instantiateModel = function(modelName, attrs) {
    var ModelClass = this._modelFor(modelName);
    var fks = this._foreignKeysFor(modelName);

    return new ModelClass(this, modelName, attrs, fks);
  };

  this._modelFor = function(modelName) {
    return this._registry[camelize(modelName)].class;
  };

  this._foreignKeysFor = function(modelName) {
    return this._registry[camelize(modelName)].foreignKeys;
  };

  /*
    Takes a record and returns a model, or an array of records
    and returns a collection.
  */
  this._hydrate = function(records, modelName) {
    if (_isArray(records)) {
      var models = records.map(function(record) {
        return this._instantiateModel(modelName, record);
      }, this);
      return new Collection(modelName, models);
    } else if (records) {
      return this._instantiateModel(modelName, records);
    } else {
      return null;
    }
  };
}
