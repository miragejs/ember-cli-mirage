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
class HasMany extends Association {

  /**
   * @method getForeignKeyArray
   * @return {Array} Array of camelized model name of associated objects
   * and foreign key for the object owning the association
   * @public
   */
  getForeignKeyArray() {
    return [camelize(this.modelName), this.getForeignKey()];
  }

  /**
   * @method getForeignKey
   * @return {String} Foreign key for the object owning the association
   * @public
   */
  getForeignKey() {
    return `${this.opts.inverse || camelize(this.ownerModelName)}Id`;
  }

  /**
   * Registers has-many association defined by given key on given model,
   * defines getters / setters for associated records and associated records' ids,
   * adds methods for creating unsaved child records and creating saved ones
   *
   * @method addMethodsToModelClass
   * @param {Function} ModelClass
   * @param {String} key
   * @param {Schema} schema
   * @public
   */
  addMethodsToModelClass(ModelClass, key, schema) {
    let modelPrototype = ModelClass.prototype;
    this._model = modelPrototype;
    this._key = key;

    let association = this;
    let foreignKey = this.getForeignKey();
    let relationshipIdsKey = `${camelize(singularize(association.key))}Ids`;
    let associationHash = { [key]: this };

    modelPrototype.hasManyAssociations = _assign(modelPrototype.hasManyAssociations, associationHash);
    modelPrototype.associationKeys.push(key);
    modelPrototype.associationIdKeys.push(relationshipIdsKey);

    Object.defineProperty(modelPrototype, relationshipIdsKey, {

      /*
        object.childrenIds
          - returns an array of the associated children's ids
      */
      get() {
        let children = association._cachedChildren || new Collection(association.modelName);

        if (!this.isNew()) {
          let query = { [foreignKey]: this.id };
          let savedChildren = schema[toCollectionName(association.modelName)].where(query);

          children.mergeCollection(savedChildren);
        }

        return children.models.map(model => model.id);
      },

      /*
        object.childrenIds = ([childrenIds...])
          - sets the associated parent (via id)
      */
      set(ids) {
        ids = ids || [];

        if (this.isNew()) {
          association._cachedChildren = schema[toCollectionName(association.modelName)].find(ids);

        } else {
          // Set current children's fk to null
          let query = { [foreignKey]: this.id };
          schema[toCollectionName(association.modelName)].where(query).update(foreignKey, null);

          // Associate the new childrens to this model
          schema[toCollectionName(association.modelName)].find(ids).update(foreignKey, this.id);

          // Clear out any old cached children
          association._cachedChildren = new Collection(association.modelName);
        }

        return this;
      }
    });

    Object.defineProperty(modelPrototype, key, {

      /*
        object.children
          - returns an array of associated children
      */
      get() {
        let temporaryChildren = association._cachedChildren || new Collection(association.modelName);

        if (this.isNew()) {
          return temporaryChildren;

        } else {
          let query = { [foreignKey]: this.id };
          let savedChildren = schema[toCollectionName(association.modelName)].where(query);

          return savedChildren.mergeCollection(temporaryChildren);
        }
      },

      /*
        object.children = [model1, model2, ...]
          - sets the associated children (via array of models)
          - note: this method will persist unsaved chidren
            + (why? because rails does)
      */
      set(models) {
        models = models ? _compact(models) : [];

        if (this.isNew()) {
          association._cachedChildren = models instanceof Collection ? models : new Collection(association.modelName, models);

        } else {

          // Set current children's fk to null
          let query = { [foreignKey]: this.id };
          schema[toCollectionName(association.modelName)].where(query).update(foreignKey, null);

          // Save any children that are new
          models.filter(model => model.isNew())
            .forEach(model => model.save());

          // Associate the new children to this model
          schema[toCollectionName(association.modelName)].find(models.map(m => m.id)).update(foreignKey, this.id);

          // Clear out any old cached children
          association._cachedChildren = new Collection(association.modelName);
        }
      }
    });

    /*
      object.newChild
        - creates a new unsaved associated child
    */
    modelPrototype[`new${capitalize(camelize(singularize(association.key)))}`] = function(attrs = {}) {
      if (!this.isNew()) {
        attrs = _assign(attrs, { [foreignKey]: this.id });
      }

      let child = schema[toCollectionName(association.modelName)].new(attrs);

      association._cachedChildren = association._cachedChildren || new Collection(association.modelName);
      association._cachedChildren.models.push(child);

      return child;
    };

    /*
      object.createChild
        - creates an associated child, persists directly to db, and
          updates the association's foreign key
        - parent must be saved
    */
    modelPrototype[`create${capitalize(camelize(singularize(association.key)))}`] = function(attrs = {}) {
      assert(!this.isNew(), 'You cannot call create unless the parent is saved');

      let augmentedAttrs = _assign(attrs, { [foreignKey]: this.id });
      let child = schema[toCollectionName(association.modelName)].create(augmentedAttrs);

      return child;
    };
  }
}

export default HasMany;
