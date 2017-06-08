import Association from './association';
import Collection from '../collection';
import Model from '../model';
import _compact from 'lodash/array/compact';
import { capitalize, camelize, singularize } from 'ember-cli-mirage/utils/inflector';
import { toCollectionName } from 'ember-cli-mirage/utils/normalize-name';
import assert from 'ember-cli-mirage/assert';

function diffIds(oldIds, newIds) {
  oldIds = oldIds.sort();
  newIds = newIds.sort();

  let add = [];
  let remove = [];

  let i = 0;
  let j = 0;

  while (i < oldIds.length && j < newIds.length) {
    let oldId = oldIds[i];
    let newId = newIds[j];

    if (oldId === newId) {
      i++;
      j++;
    } else if (oldId < newId) {
      remove.push(oldId);
      i++;
    } else if (newId < oldId) {
      add.push(newId);
      j++;
    }
  }

  while (i < oldIds.length) {
    remove.push(oldIds[i]);
    i++;
  }

  while (j < newIds.length) {
    add.push(newIds[j]);
    j++;
  }

  return { add, remove };
}

let guid = 0;

/**
 * @class HasAndBelongsToMany
 * @extends Association
 * @constructor
 * @public
 */
class HasAndBelongsToMany extends Association {
  /**
   * @method getForeignKeyArray
   * @return {Array} Array of camelized model name of associated objects
   * and foreign key for the object owning the association
   * @public
   */
  getForeignKeyArray() {
    return ['__unused__', `__unused${guid++}__`];
  }

  /**
   * @method getForeignKey
   * @return {String} Foreign key for the object owning the association
   * @public
   */
  getForeignKey() {
    return `${singularize(this.getForeignAssociationName())}Ids`;
  }

  getForeignAssociationName() {
    return this.opts.inverse || toCollectionName(this.ownerModelName);
  }

  getJoinModelName() {
    let self  = `${this.ownerModelName}${capitalize(singularize(this.key))}`;
    let other = `${this.modelName}${capitalize(singularize(this.getForeignAssociationName()))}`;

    if (self < other) {
      return `${self}${capitalize(other)}`;
    } else {
      return `${other}${capitalize(self)}`;
    }
  }

  getJoinModelKey() {
    return `${camelize(this.modelName)}Id`;
  }

  getJoinModelForeignKey() {
    return `${camelize(this.ownerModelName)}Id`;
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
    /*
      mirage/models/user.js

      export default Model.extend({
        ownedApps: hasAndBelongsToMany('app', { inverse: 'owners' })
      });

      ...

      this.key = 'ownedApps';
      this.modelName = 'app';
      this.opts = { inverse: 'owners' };
      this.ownerModelName = 'user';
      this._model = (user model class);

      let association = (HABTM association object);
      let relationshipIdsKey = 'ownedAppIds';

      let joinModel = 'appOwnerUserOwnedApp';
      let joinModelKey = 'appId';
      let joinModelForeignKey = 'userId';

      let addOne = 'addOwnedApp';
      let addOneId = 'addOwnedAppId';
      let addMany = 'addOwnedApps';
      let addManyIds = 'addOwnedAppIds';

      let removeOne = 'removeOwnedApp';
      let removeOneId = 'removeOwnedAppId';
      let removeMany = 'removeOwnedApps';
      let removeManyIds = 'removeOwnedAppIds';
    */

    let modelPrototype = ModelClass.prototype;
    this._model = modelPrototype;

    let association = this;
    let relationshipIdsKey = `${camelize(singularize(association.key))}Ids`;

    let joinModel = this.getJoinModelName();
    let joinModelKey = this.getJoinModelKey();
    let joinModelForeignKey = this.getJoinModelForeignKey();

    let addOne = `add${capitalize(singularize(this.key))}`;
    let addOneId = `add${capitalize(singularize(this.key))}Id`;
    let addMany = `add${capitalize(this.key)}`;
    let addManyIds = `add${capitalize(singularize(this.key))}Ids`;

    let removeOne = `remove${capitalize(singularize(this.key))}`;
    let removeOneId = `remove${capitalize(singularize(this.key))}Id`;
    let removeMany = `remove${capitalize(this.key)}`;
    let removeManyIds = `remove${capitalize(singularize(this.key))}Ids`;

    modelPrototype.associationKeys.push(key);
    modelPrototype.associationIdKeys.push(relationshipIdsKey);

    if (!schema.modelFor(joinModel)) {
      schema.registerModel(joinModel, Model.extend());
    }

    Object.defineProperty(modelPrototype, relationshipIdsKey, {

      /*
        object.ownedAppIds
          - returns an array of the associated children's ids
      */
      get() {
        if (this.isNew()) {
          return [];
        } else {
          let query = { [joinModelForeignKey]: this.id };
          let links = schema.where(joinModel, query);
          return links.models.map(joinModel => joinModel[joinModelKey]);
        }
      },

      /*
        object.ownedAppIds = ([appIds...])
          - sets the associated parent (via id)
      */
      set(ids) {
        ids = ids || [];

        assert(ids.length === 0 || !this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${relationshipIdsKey}= ... unless the parent is saved`);

        let { add, remove } = diffIds(this[relationshipIdsKey], ids);

        this[addManyIds](...add);
        this[removeManyIds](...remove);

        return this;
      }
    });

    Object.defineProperty(modelPrototype, key, {

      /*
        object.ownedApps
          - returns an array of associated children
      */
      get() {
        if (this.isNew()) {
          return new Collection(association.modelName);
        } else {
          let ids = this[relationshipIdsKey];
          return schema.find(association.modelName, ids);
        }
      },

      /*
        object.ownedApps = [app1, app2, ...]
          - sets the associated children (via array of models)
          - note: this method will persist unsaved chidren
            + (why? because rails does)
      */
      set(models) {
        models = models ? _compact(models) : [];

        assert(models.length === 0 || !this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${key}= ... unless the parent is saved`);
        assert(models.every(model => !model.isNew()), `You cannot call ${camelize(association.ownerModelName)}.${key}= ... with unsaved children`);

        this[relationshipIdsKey] = models.map(model => model.id);
      }
    });

    modelPrototype[addOne] = function(model) {
      assert(!this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${addOne}(...) unless the parent is saved`);
      assert(!model.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${addOne}(...) with an unsaved child`);

      this[addOneId](model.id);
    };

    modelPrototype[addOneId] = function(id) {
      assert(!this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${addOneId}(...) unless the parent is saved`);

      let query = {
        [joinModelKey]: id,
        [joinModelForeignKey]: this.id
      };

      if (!schema.findBy(joinModel, query)) {
        schema.create(joinModel, query);
      }
    };

    modelPrototype[addMany] = function(...models) {
      assert(!this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${addMany}(...) unless the parent is saved`);
      assert(!models.some(model => model.isNew()), `You cannot call ${camelize(association.ownerModelName)}.${addMany}(...) with unsaved children`);

      models.forEach(model => this[addOneId](model.id));
    };

    modelPrototype[addManyIds] = function(...ids) {
      assert(!this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${addManyIds}(...) unless the parent is saved`);

      ids.forEach(id => this[addOneId](id));
    };

    modelPrototype[removeOne] = function(model) {
      assert(!this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${removeOne}(...) unless the parent is saved`);
      assert(!model.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${removeOne}(...) with an unsaved child`);

      this[removeManyIds](model.id);
    };

    modelPrototype[removeOneId] = function(id) {
      assert(!this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${removeOneId}(...) unless the parent is saved`);

      this[removeManyIds](id);
    };

    modelPrototype[removeMany] = function(...models) {
      assert(!this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${removeMany}(...) unless the parent is saved`);
      assert(models.every(model => !model.isNew()), `You cannot call ${camelize(association.ownerModelName)}.${removeMany}(...) with unsaved children`);

      this[removeManyIds](...models.map(model => model.id));
    };

    modelPrototype[removeManyIds] = function(...ids) {
      assert(!this.isNew(), `You cannot call ${camelize(association.ownerModelName)}.${removeManyIds}(...) unless the parent is saved`);

      let links;

      if (ids.length === 0) {
        links = schema.where(joinModel, { [joinModelForeignKey]: this.id });
      } else {
        links = schema.where(joinModel, link => {
          return link[joinModelForeignKey] === this.id &&
            ids.indexOf(link[joinModelKey]) > -1;
        });
      }

      links.models.forEach(link => link.destroy());
    };
  }
}

export default HasAndBelongsToMany;
