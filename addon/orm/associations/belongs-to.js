import Association from './association';
import _assign from 'lodash/object/assign';
import { capitalize, camelize } from 'ember-cli-mirage/utils/inflector';
import assert from 'ember-cli-mirage/assert';
import Ember from 'ember';

class BelongsTo extends Association {

  /*
    The belongsTo association adds a fk to the owner of the association
  */
  getForeignKeyArray() {
    return [camelize(this.ownerModelName), `${camelize(this.key)}Id`];
  }

  getForeignKey() {
    return `${camelize(this.key)}Id`;
  }

  addMethodsToModelClass(ModelClass, key, schema) {
    let modelPrototype = ModelClass.prototype;
    var association = this;
    var foreignKey = this.getForeignKey();

    var associationHash = {};
    associationHash[key] = this;
    modelPrototype.belongsToAssociations = _assign(modelPrototype.belongsToAssociations, associationHash);
    modelPrototype.associationKeys.push(key);
    modelPrototype.associationIdKeys.push(foreignKey);

    Object.defineProperty(modelPrototype, this.getForeignKey(), {

      /*
        object.parentId
          - returns the associated parent's id
      */
      get() {
        return this.attrs[foreignKey];
      },

      /*
        object.parentId = (parentId)
          - sets the associated parent (via id)
      */
      set(id) {
        assert(
          !id || schema[camelize(association.modelName)].find(id),
          `Couldn't find ${association.modelName} with id = ${id}`
        );

        this.attrs[foreignKey] = id;
        return this;
      }
    });

    Object.defineProperty(modelPrototype, key, {
      /*
        object.parent
          - returns the associated parent
      */
      get() {
        var foreignKeyId = this[foreignKey];
        if (foreignKeyId != null) {
          association._tempParent = null;
          return schema[camelize(association.modelName)].find(foreignKeyId);

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
        if (!Ember.isEmpty(newModel) && typeof newModel === 'object' && typeof newModel.isNew === 'function' && newModel.isNew()) {
          // newModel is a model
          this[foreignKey] = null;
          association._tempParent = newModel;
        } else if (!Ember.isEmpty(newModel) && typeof newModel === 'object' && !Ember.isEmpty(newModel.id)) {
          // newModel is a simple object with id property
          association._tempParent = null;
          this[foreignKey] = newModel.id;
        } else if (!Ember.isEmpty(newModel)) {
          // newModel is an id
          association._tempParent = null;
          this[foreignKey] = newModel;
        } else {
          // newModel is not present
          association._tempParent = null;
          this[foreignKey] = null;
        }
      }
    });

    /*
      object.newParent
        - creates a new unsaved associated parent
    */
    modelPrototype['new' + capitalize(key)] = function(attrs) {
      var parent = schema[camelize(association.modelName)].new(attrs);

      this[key] = parent;

      return parent;
    };

    /*
      object.createParent
        - creates an associated parent, persists directly to db,
          and updates the owner's foreign key
    */
    modelPrototype['create' + capitalize(key)] = function(attrs) {
      var parent = schema[camelize(association.modelName)].create(attrs);

      this[foreignKey] = parent.id;

      return parent;
    };
  }

}

export default BelongsTo;
