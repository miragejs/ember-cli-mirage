// jscs:disable requireParenthesesAroundArrowParam
import { toCollectionName } from 'ember-cli-mirage/utils/normalize-name';
import extend from '../utils/extend';
import assert from '../assert';
import Collection from './collection';

/*
  The Model class. Notes:

  - We need to pass in modelName, because models are created with
    .extend and anonymous functions, so you cannot use
    reflection to find the name of the constructor.
*/

/*
  Constructor
*/
class Model {

  constructor(schema, modelName, attrs, fks) {
    assert(schema, 'A model requires a schema');
    assert(modelName, 'A model requires a modelName');

    this._schema = schema;
    this.modelName = modelName;
    this.fks = fks || [];
    attrs = attrs || {};
    this._setupAttrs(attrs);
    this._setupRelationships(attrs);
    this.childrenAssociations = this.childrenAssociations || [];
    // the associations in this list will be destroyed in beforeDestroy
    // TODO: define cleaner hasOne / belongsToMany relationships

    return this;
  }

  default() {
    // override in model to setup when instantiated
  }

  typeOf(relName) {
    let relNames = relName.pluralize();
    return this[relNames] ? 'hasMany' : 'belongsTo';
  }

  updateAttrs(hash) {
    this.update(hash);
    // https://github.com/samselikoff/ember-cli-mirage/issues/719
    return this;
  }
  /**
   * Creates or saves the model.
   * @method save
   * @return this
   * @public
   */
  save() {
    let collection = toCollectionName(this.modelName);
    if (this.isNew()) {
      // Update the attrs with the db response
      this.attrs = this._schema.db[collection].insert(this.attrs);

      // Ensure the id getter/setter is set
      this._definePlainAttribute('id');
      this.default();

    } else {
      this._schema.db[collection].update(this.attrs.id, this.attrs);
    }

    // Update associated children
    this._saveAssociations();

    return this;
  }

  /**
   * Update the record in the db.
   * @method update
   * @param {String} key
   * @param {String} val
   * @return this
   * @public
   */
  update(key, val) { // https://github.com/samselikoff/ember-cli-mirage/pull/846
     let attrs;
     if (key == null) {
       return this;
     }

     if (typeof key === 'object') {
       attrs = key;
     } else {
       (attrs = {})[key] = val;
     }

     Object.keys(attrs).forEach(function(attr) {
       this.attrs[attr] = this[attr] = attrs[attr];
     }, this);

     this.save();

     return this;
   }

   /**
    * Destroys the children associations before destroying the model
    * @method destroy
    * @public
    */
   _beforeDestroy() {
     this.associationKeys.forEach((relName) => {
       if (this.childrenAssociations.indexOf(relName) > -1) {
         this.hasNo(relName);
       }
     });
   }

 /**
  * Destroys the db record
  * @method destroy
  * @public
  */

  destroy() {
    this._beforeDestroy();
    let collection = toCollectionName(this.modelName);
    this._schema.db[collection].remove(this.attrs.id);
  }

  /**
   * Boolean, true if the model has not been persisted yet to the db.
   *
   * Originally this method simply checked if the model had an id; however,
   * we let people create models with pre-specified ids. So, we have to
   * check whether the record is in the actual databse or not.
   *
   * @method isNew
   * @return {Boolean}
   * @public
   */
  isNew() {
    let hasDbRecord = false;
    let hasId = this.attrs.id !== undefined && this.attrs.id !== null;

    if (hasId) {
      let collectionName = toCollectionName(this.modelName);
      let record = this._schema.db[collectionName].find(this.attrs.id);
      if (record) {
        hasDbRecord = true;
      }
    }

    return !hasDbRecord;
  }

  /**
   * Boolean, opposite of `isNew`
   * @method isSaved
   * @return {Boolean}
   * @public
   */
  isSaved() {
    return !this.isNew();
  }

  /**
   * Reload a model’s data from the database.
   * @method reload
   * @return this
   * @public
   */
  reload() {
    let collection = toCollectionName(this.modelName);
    let attrs = this._schema.db[collection].find(this.id);

    Object.keys(attrs)
      .filter(function(attr) {
        return attr !== 'id';
      })
      .forEach(function(attr) {
        this[attr] = attrs[attr];
      }, this);

    return this;
  }

  toJSON() {
    return this.attrs;
  }

  // Private

  /**
   * model.attrs represents the persistable attributes, i.e. your db
   * table fields.
   * @method _setupAttrs
   * @param attrs
   * @private
   */
  _setupAttrs(attrs) {
    // Verify no undefined associations are passed in
    Object.keys(attrs)
      .filter(key => {
        let value = attrs[key];
        return (value instanceof Model || value instanceof Collection);
      })
      .forEach(key => {
        let modelOrCollection = attrs[key];

        assert(this.associationKeys.indexOf(key) > -1, `You're trying to create a ${this.modelName} model and you passed in a ${modelOrCollection.toString()} under the ${key} key, but you haven't defined that key as an association on your model.`);
      });

    // Filter out association keys
    let hash = Object.keys(attrs).reduce((memo, key) => {
      if (this.associationKeys.indexOf(key) === -1 && this.associationIdKeys.indexOf(key) === -1) {
        memo[key] = attrs[key];
      }
      return memo;
    }, {});

    // Ensure fks are there
    this.fks.map(function(fk) {
      hash[fk] = attrs[fk] || null;
    });

    this.attrs = hash;

    // define plain getter/setters for non-association keys
    Object.keys(hash).forEach(function(attr) {
      if (this.associationKeys.indexOf(attr) === -1 && this.associationIdKeys.indexOf(attr) === -1) {
        this._definePlainAttribute(attr);
      }
    }, this);
  }

  /**
   * Define getter/setter for a plain attribute
   * @method _definePlainAttribute
   * @param attr
   * @private
   */
  _definePlainAttribute(attr) {
    if (this[attr] !== undefined) {
      return;
    }

    // Ensure the attribute is on the attrs hash
    if (!this.attrs.hasOwnProperty(attr)) {
      this.attrs[attr] = null;
    }

    // Define the getter/setter
    Object.defineProperty(this, attr, {
      get() {
        return this.attrs[attr];
      },
      set(val) {
        this.attrs[attr] = val; return this;
      }
    });
  }

  /**
   * @method _setupRelationships
   * @param attrs
   * @private
   */
  _setupRelationships(attrs) {
    // Only want association keys and fks
    let hash = Object.keys(attrs).reduce((memo, attr) => {
      if (this.associationKeys.indexOf(attr) > -1 || this.associationIdKeys.indexOf(attr) > -1 || this.fks.indexOf(attr) > -1) {
        memo[attr] = attrs[attr];
      }
      return memo;
    }, {});

    Object.keys(hash).forEach(function(attr) {
      this[attr] = hash[attr];
    }, this);
  }

  /**
   * Update associated children when saving a collection
   * @method _saveAssociations
   * @private
   */
  _saveAssociations() {
    Object.keys(this.belongsToAssociations).forEach(key => {
      let association = this.belongsToAssociations[key];
      let parent = this[key];
      if (parent && parent.isNew()) {
        let fk = association.getForeignKey();
        parent.save();
        this.update(fk, parent.id);
      }
    });

    Object.keys(this.hasManyAssociations).forEach(key => {
      let association = this.hasManyAssociations[key];
      let children = this[key];
      children.update(association.getForeignKey(), this.id);
    });
  }

  /**
   * Simple string representation of the model and id.
   * @method toString
   * @return {String}
   * @public
   */
  toString() {
    return `model:${this.modelName}(${this.id})`;
  }

  hasNo(relName) {
    relName = relName.singularize();
    return this.typeOf(relName) === 'hasMany' ?
    this.hasNoOfMany(relName) :
    this.hasNoOfOne(relName);
  }
  hasNoOfOne(relName) {
    relName = relName.singularize();
    let rel = this[relName];
    if (rel) {
      rel.destroy();
    }
    this[relName] = null;
    return this;
  }
  hasNoOfMany(relName) {
    relName = relName.singularize();
    // TODO: create a general deleteXX method for hasMany
    let rels = this[`${relName}s`].models;
    this[`${relName}s`] = [];
    rels.forEach((rel) => {
      rel.destroy();
    });
    return this;
  }

  hasMulti(relName) { // exactly two
    relName = relName.singularize();
    let rels = this[`${relName}s`].models;
    let initialNumber = rels.length;
    for (let i = initialNumber; i < 2; i++) {
      // let rel = this[`create${relName.capitalize()}`]();
      let assoc = this.hasManyAssociations[relName.pluralize()];
      let { modelName } = assoc;
      let inverseRelName = assoc.opts.inverse || this.modelName;
      let hash = {};
      hash[`${inverseRelName.camelize()}Id`] = this.id;
      server.create(modelName, hash);
    }
    return this[`${relName}s`].models;
  }

  hasOne(relName, attrs) { // exactly one
    relName = relName.singularize();
    let model = this.typeOf(relName) === 'hasMany' ?
    this.hasOneOfMany(relName) :
    this.hasOneOfOne(relName);
    if (attrs) {
      return model.updateAttrs(attrs);
    } else {
      return model;
    }
  }
  hasOneOfMany(relName) {
    relName = relName.singularize();
    // TODO: create a general deleteXX method for hasMany
    let rels = this[`${relName}s`].models;
    let rel;
    let { length } = rels;
    if (length) {
      rel = rels[0];
      for (let i = 1; i < length; i++) {
        rels[i].destroy();
      }
      if (length > 1) {
        this[`${relName}s`] = [rel];
      }
    } else {
      let assoc = this.hasManyAssociations[relName.pluralize()];
      let { modelName } = assoc;
      let inverseRelName = assoc.opts.inverse || this.modelName;
      let hash = {};
      hash[`${inverseRelName.camelize()}Id`] = this.id;
      rel = server.create(modelName, hash);
    }
    return rel;
  }
  hasOneOfOne(relName) {
    relName = relName.singularize();
    let rel = this[relName];
    if (!rel) {
      let hash = {};
      hash[`${this.modelName.camelize()}Id`] = this.id;
      let { modelName } = this.belongsToAssociations[relName];
      rel = server.create(modelName, hash);
      this.update(`${relName}Id`, rel.id);
    }
    return rel;
  }
}

Model.extend = extend;

export default Model;
