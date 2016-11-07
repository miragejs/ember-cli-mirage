// jscs:disable requireParenthesesAroundArrowParam
import Association from './association';
import Collection from '../collection';
import _assign from 'lodash/object/assign';
import _compact from 'lodash/array/compact';
import { capitalize, camelize, singularize } from 'ember-cli-mirage/utils/inflector';
import { toCollectionName } from 'ember-cli-mirage/utils/normalize-name';
import assert from 'ember-cli-mirage/assert';

/**
 * @class HasMany
 * @extends Association
 * @constructor
 * @public
 */
export default class extends Association {

  /**
   * @method getForeignKeyArray
   * @return {Array} Array of camelized model name of associated objects
   * and foreign key for the object owning the association
   * @public
   */
  getForeignKeyArray() {
    return [camelize(this.ownerModelName), this.getForeignKey()];
  }

  /**
   * @method getForeignKey
   * @return {String} Foreign key for the object owning the association
   * @public
   */
  getForeignKey() {
    return `${singularize(camelize(this.key))}Ids`;
  }

  /**
   * Registers has-many association defined by given key on given model,
   * defines getters / setters for associated records and associated records' ids,
   * adds methods for creating unsaved child records and creating saved ones
   *
   * @method addMethodsToModelClass
   * @param {Function} ModelClass
   * @param {String} key
   * @public
   */
  addMethodsToModelClass(ModelClass, key) {
    let modelPrototype = ModelClass.prototype;
    this._model = modelPrototype;
    this._key = key;

    let association = this;
    let foreignKey = this.getForeignKey();
    let associationHash = { [key]: this };

    modelPrototype.hasManyAssociations = _assign(modelPrototype.hasManyAssociations, associationHash);
    modelPrototype.associationKeys.push(key);
    modelPrototype.associationIdKeys.push(foreignKey);

    Object.defineProperty(modelPrototype, foreignKey, {

      /*
        object.childrenIds
          - returns an array of the associated children's ids
      */
      get() {
        this._tempAssociations = this._tempAssociations || {};
        let tempChildren = this._tempAssociations[key];
        let ids = [];

        if (tempChildren) {
          ids = tempChildren.models.map(model => model.id);
        } else {
          ids = this.attrs[foreignKey] || [];
        }

        return ids;
        // let children = association._cachedChildren || new Collection(association.modelName);
        //
        // if (!this.isNew()) {
        //   let query = { [foreignKey]: this.id };
        //   let savedChildren = association.schema[toCollectionName(association.modelName)].where(query);
        //
        //   children.mergeCollection(savedChildren);
        // }
        //
        // return children.models.map(model => model.id);
      },

      /*
        object.childrenIds = ([childrenIds...])
          - sets the associated children (via id)
      */
      set(ids) {
        let tempChildren;

        if (ids === null) {
          tempChildren = [];
        } else if (ids !== undefined) {
          assert(Array.isArray(ids), `You must pass an array in when seting ${foreignKey} on ${this}`);
          tempChildren = association.schema[toCollectionName(association.modelName)].find(ids);
        }

        this[key] = tempChildren;
        // ids = ids || [];
        //
        // if (this.isNew()) {
        //   association._cachedChildren = association.schema[toCollectionName(association.modelName)].find(ids);
        //
        // } else {
        //   // Set current children's fk to null
        //   let query = { [foreignKey]: this.id };
        //   association.schema[toCollectionName(association.modelName)].where(query).update(foreignKey, null);
        //
        //   // Associate the new childrens to this model
        //   association.schema[toCollectionName(association.modelName)].find(ids).update(foreignKey, this.id);
        //
        //   // Clear out any old cached children
        //   association._cachedChildren = new Collection(association.modelName);
        // }
        //
        // return this;
      }
    });

    Object.defineProperty(modelPrototype, key, {

      /*
        object.children
          - returns an array of associated children
      */
      get() {
        this._tempAssociations = this._tempAssociations || {};

        let collection = null;
        let tempChildren = this._tempAssociations[key];
        let foreignKeyIds = this[foreignKey];

        if (tempChildren) {
          collection = tempChildren;
        // } else if (foreignKeyId !== null) {
        //   collection = association.schema[toCollectionName(association.modelName)].find(foreignKeyId);
        } else {
          if (foreignKeyIds) {
            collection = association.schema[toCollectionName(association.modelName)].find(foreignKeyIds);
          } else {
            collection = new Collection(association.modelName);
          }

          this._tempAssociations[key] = collection;
        }

        return collection;
        // let temporaryChildren = association._cachedChildren || new Collection(association.modelName);
        //
        // if (this.isNew()) {
        //   return temporaryChildren;
        //
        // } else {
        //   let query = { [foreignKey]: this.id };
        //   let savedChildren = association.schema[toCollectionName(association.modelName)].where(query);
        //
        //   return savedChildren.mergeCollection(temporaryChildren);
        // }
      },

      /*
        object.children = [model1, model2, ...]
          - sets the associated children (via array of models or Collection)
      */
      set(models) {
        if (models instanceof Collection) {
          models = models.models;
        }

        models = models ? _compact(models) : [];
        this._tempAssociations = this._tempAssociations || {};

        this._tempAssociations[key] = new Collection(association.modelName, models);

        if (association.inverse())  {
          models.forEach(model => {
            let inverseKey = association.inverse().key;

            model.associateModelWithKey(this, inverseKey);
          });
        }

        // if (this.isNew()) {
        //   association._cachedChildren = models instanceof Collection ? models : new Collection(association.modelName, models);
        //
        // } else {
        //
        //   // Set current children's fk to null
        //   let query = { [foreignKey]: this.id };
        //   association.schema[toCollectionName(association.modelName)].where(query).update(foreignKey, null);
        //
        //   // Save any children that are new
        //   models.filter(model => model.isNew())
        //     .forEach(model => model.save());
        //
        //   // Associate the new children to this model
        //   association.schema[toCollectionName(association.modelName)].find(models.map(m => m.id)).update(foreignKey, this.id);
        //
        //   // Clear out any old cached children
        //   association._cachedChildren = new Collection(association.modelName);
        // }
      }
    });

    /*
      object.newChild
        - creates a new unsaved associated child
    */
    modelPrototype[`new${capitalize(camelize(singularize(association.key)))}`] = function(attrs = {}) {
      let child = association.schema[toCollectionName(association.modelName)].new(attrs);

      let children = this[key].models;
      children.push(child);
      this[key] = children;

      return child;
    };

    /*
      object.createChild
        - creates a new saved associated child, and immediately persists both models
    */
    modelPrototype[`create${capitalize(camelize(singularize(association.key)))}`] = function(attrs = {}) {
      let child = association.schema[toCollectionName(association.modelName)].create(attrs);

      let children = this[key].models;
      children.push(child);
      this[key] = children;

      this.save();

      return child;
    };
  }
}
