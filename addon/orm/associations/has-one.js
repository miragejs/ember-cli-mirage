import Association from './association';
import _assign from 'lodash/object/assign';
import { capitalize, camelize, singularize } from 'ember-cli-mirage/utils/inflector';
import assert from 'ember-cli-mirage/assert';

class HasOne extends Association {

  /*
    The hasOne association adds a foreign key to the target model of the association.

    For example,

    ```js
    // models/user.js
    export default User.extend({

      address: hasOne()

    });
    ```

    would add a `userId` to the `address` mdoel.
  */
  getForeignKeyArray() {
    return [camelize(this.modelName), this.getForeignKey()];
  }

  getForeignKey() {
    return `${this.opts.inverseOf || camelize(this.ownerModelName)}Id`;
  }

  addMethodsToModelClass(ModelClass, key, schema) {
    this.schema = schema;

    let modelPrototype = ModelClass.prototype;
    let association = this;
    let foreignKey = this.getForeignKey();
    let relationshipIdKey = camelize(singularize(association.key)) + 'Id';

    modelPrototype.hasOneAssociations = _assign(modelPrototype.hasOneAssociations, {[key]: this});
    modelPrototype.associationKeys.push(key);
    modelPrototype.associationIdKeys.push(relationshipIdKey);

    Object.defineProperty(modelPrototype, relationshipIdKey, {

      /*
        object.childId
          - returns the associated child's id
      */
      get() {
        let model = association._cachedChild || null;

        if (!this.isNew() && !model) {
          let query = {[foreignKey]: this.id};
          let savedModel = schema[camelize(association.modelName)].where(query)[0];

          if (savedModel) {
            model = savedModel;
          }
        }

        return model ? model.id : null;
      },

      /*
        object.childId = (childId)
          - set the associated child (via id)
          - if null, update old child
      */
      set(id) {
        assert(
          !id || schema[camelize(association.modelName)].find(id),
          `Couldn\'t find ${association.modelName} with id = ${id}`
        );

        let newChild = id ? schema[camelize(association.modelName)].find(id) : null;

        if (this.isNew()) {
          association._cachedChild = newChild;

        } else {
          // Clear out any old cached children
          association._cachedChild = null;

          // Set current child's fk to null
          association.clearChildForeignKey(this);

          // Associate the new child to this model
          if (newChild) {
            newChild.update(foreignKey, this.id);
          }

        }

        return this;
      }
    });

    Object.defineProperty(modelPrototype, key, {

      /*
        object.child
          - returns the associated child
      */
      get() {
        let model = association._cachedChild || null;

        if (!this.isNew() && !model) {
          let query = {};
          query[foreignKey] = this.id;

          model = schema[camelize(association.modelName)].where(query)[0];
        }

        return model || null;
      },

      /*
        object.child = model
          - sets the associated child
          - note: this method will persist an unsaved child
            + (why? because rails does)
      */
      set(model) {
        if (this.isNew()) {
          association._cachedChild = model;

        } else if (model) {

          // Set current child's fk to null
          association.clearChildForeignKey(this);

          // Save the child if it's new
          if (model.isNew()) {
            model.save();
          }

          // Associate the new child to this model
          model.update(foreignKey, this.id);

          // Clear out any old cached child
          association._cachedChild = null;
        } else {
          association.clearChildForeignKey(this);
          association._cachedChild = null;
        }
      }
    });

    /*
      object.newChild
        - creates a new unsaved associated child

      Note: We don't just call [key] = newChild here, because that method persists
      the new child. Here, we don't want to immediately persist it (following Rails behavior).
    */
    modelPrototype['new' + capitalize(camelize(association.key))] = function(attrs = {}) {
      // If current child exists, set its fk to null
      association.clearChildForeignKey(this);

      if (!this.isNew()) {
        attrs = _assign(attrs, { [foreignKey]: this.id });
      }

      let child = schema[camelize(association.modelName)].new(attrs);

      association._cachedChild = child;

      return child;
    };


    /*
      object.createChild
        - creates an associated child, persists directly to db, and
          updates the association's foreign key
        - if parent is new, persists parent
    */

    modelPrototype['create' + capitalize(camelize(association.key))] = function(attrs = {}) {
      if (this.isNew()) {
        this.save();
      }

      // If current child exists, set its fk to null
      association.clearChildForeignKey(this);

      let augmentedAttrs = _assign(attrs, { [foreignKey]: this.id });
      let child = schema[camelize(association.modelName)].create(augmentedAttrs);

      // Clear out any old cached children
      association._cachedChild = null;

      return child;
    };
  }

  // If current child exists, set its fk to null
  clearChildForeignKey(parent) {
    let foreignKey = this.getForeignKey();
    let child = parent[this.key];

    if (child) {
      child[foreignKey] = null;

      if (child.isSaved()) {
        child.save();
      }
    }
  }
}

export default HasOne;
