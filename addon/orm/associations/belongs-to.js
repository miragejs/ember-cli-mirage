import Association from './association';
import _assign from 'lodash/assign';
import { capitalize, camelize } from 'ember-cli-mirage/utils/inflector';
import { toCollectionName } from 'ember-cli-mirage/utils/normalize-name';
import assert from 'ember-cli-mirage/assert';

/**
 * @class BelongsTo
 * @extends Association
 * @constructor
 * @public
 */
class BelongsTo extends Association {

  /*
    The belongsTo association adds a fk to the owner of the association
  */
  /**
   * @method getForeignKeyArray
   * @return {Array} Array of camelized name of the model owning the association
   * and foreign key for the association
   * @public
   */
  getForeignKeyArray() {
    return [camelize(this.ownerModelName), this.getForeignKey()];
  }

  /**
   * @method getForeignKey
   * @return {String} Foreign key for the association
   * @public
   */
  getForeignKey() {
    return camelize(this.key);
  }

  /**
   * registers belongs-to association defined by given key on given model,
   * defines getters / setters for associated parent and associated parent's id,
   * adds methods for creating unsaved parent record and creating a saved one
   *
   * @method addMethodsToModelClass
   * @param {Function} ModelClass
   * @param {String} key
   * @param {Schema} schema
   * @public
   */
  addMethodsToModelClass(ModelClass, key, schema) {
    let modelPrototype = ModelClass.prototype;
    let association = this;
    let foreignKey = this.getForeignKey();

    let isPolymorphic = this.opts.polymorphic;
    let associationHash = { [key]: this };

    modelPrototype.associationKeys.push(key);
    modelPrototype.associationIdKeys.push(`${foreignKey}Id`);
    modelPrototype.belongsToAssociations = _assign(modelPrototype.belongsToAssociations, associationHash);

    if (isPolymorphic) {
      modelPrototype.associationTypeKeys.push(`${foreignKey}Type`);
    }

    Object.defineProperty(modelPrototype, `${foreignKey}Id`, {

      /*
        object.parentId
          - returns the associated parent's id
      */
      get() {
        return this.attrs[`${foreignKey}Id`];
      },

      /*
        object.parentId = (parentId)
          - sets the associated parent (via id)
      */
      set(id) {
        let foreignType = this[`${foreignKey}Type`] || association.modelName;

        assert(
          !id || schema.db[toCollectionName(foreignType)].find(id),
          `Couldn\'t find ${association.modelName} with id = ${id}`
        );

        this.attrs[`${foreignKey}Id`] = id;
        return this;
      }
    });

    Object.defineProperty(modelPrototype, `${foreignKey}Type`, {

      /*
        object.parentId
          - returns the associated parent's id
      */
      get() {
        return this.attrs[`${foreignKey}Type`];
      },

      /*
        object.parentId = (parentId)
          - sets the associated parent (via id)
      */
      set(type) {
        this.attrs[`${foreignKey}Type`] = type;
        return this;
      }
    });

    Object.defineProperty(modelPrototype, key, {
      /*
       * });
        object.parent
          - returns the associated parent
      */
      get() {
        let foreignKeyId = this[`${foreignKey}Id`];
        if (foreignKeyId != null) {
          let foreignType = this[`${foreignKey}Type`] || association.modelName;

          association._tempParent = null;
          return schema[toCollectionName(foreignType)].find(foreignKeyId);

        } else if (association._tempParent) {
          return association._tempParent;
        } else {
          return null;
        }
      },

      /*
        object.parent = (parentModel)
          - sets the associated parent (via model)
      */
      set(newModel) {
        if (newModel && newModel.isNew()) {
          this[`${foreignKey}Id`] = null;
          association._tempParent = newModel;
        } else if (newModel) {
          association._tempParent = null;

          if (isPolymorphic) {
            this[`${foreignKey}Type`] = newModel.modelName;
          }

          this[`${foreignKey}Id`] = newModel.id;
        } else {
          association._tempParent = null;
          this[`${foreignKey}Id`] = null;
        }
      }
    });

    /*
      object.newParent
        - creates a new unsaved associated parent
    */
    modelPrototype[`new${capitalize(key)}`] = function(attrs) {
      let parent = schema[toCollectionName(association.modelName)].new(attrs);

      this[key] = parent;

      return parent;
    };

    /*
      object.createParent
        - creates a new saved associated parent, and immediately persists both models
    */
    modelPrototype[`create${capitalize(key)}`] = function(attrs) {
      let parent = schema[toCollectionName(association.modelName)].create(attrs);

      this[key] = parent;
      this.save();

      return parent;
    };
  }

}

export default BelongsTo;
