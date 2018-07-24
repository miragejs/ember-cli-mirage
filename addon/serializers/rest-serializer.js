import ActiveModelSerializer from './active-model-serializer';
import { camelize, singularize, pluralize } from '../utils/inflector';
import _assign from 'lodash/assign';
import Collection from '../orm/collection';
import PolymorphicCollection from '../orm/polymorphic-collection';

export default ActiveModelSerializer.extend({
  serializeIds: 'always',

  keyForModel(type) {
    return camelize(type);
  },

  keyForAttribute(attr) {
    return camelize(attr);
  },

  keyForRelationship(type) {
    return camelize(pluralize(type));
  },

  keyForEmbeddedRelationship(attributeName) {
    return camelize(attributeName);
  },

  keyForRelationshipIds(type) {
    return camelize(pluralize(type));
  },

  keyForForeignKey(relationshipName) {
    return camelize(singularize(relationshipName));
  },

  getCoalescedIds(request) {
    return request.queryParams && request.queryParams.ids;
  },

  /**
   * @method _maybeAddAssociationIds
   * @param model
   * @param attrs
   * @private
   */
  _maybeAddAssociationIds(model, attrs) {
    let newHash = _assign({}, attrs);

    if (this.serializeIds === 'always') {
      model.associationKeys.forEach((key) => {
        let association = model[key];
        if (this.isCollection(association)) {
          let formattedKey = this.keyForRelationshipIds(key);
          newHash[formattedKey] = model[key].models.map((m) => {
            return { id: m.id, type: m.modelName };
          });
        } else if (association) {
          let formattedKey = this.keyForForeignKey(key);
          newHash[formattedKey] = model[`${key}Id`];
        }
      });
    } else if (this.serializeIds === 'included') {
      this.getKeysForIncluded().forEach((key) => {
        let association = model[key];

        if (model.associationFor(key).isPolymorphic) {
          if (association instanceof PolymorphicCollection) {
            let formattedKey = this.keyForRelationship(key);

            newHash[formattedKey] = model[`${singularize(key)}Ids`];
          } else if (association instanceof Collection) {
            let formattedKey = this.keyForRelationshipIds(key);

            newHash[formattedKey] = model[key].models.map((m) => m.id);
          } else {
            let formattedTypeKey = this.keyForPolymorphicForeignKeyType(key);
            let formattedIdKey = this.keyForPolymorphicForeignKeyId(key);

            newHash[formattedTypeKey] = model[`${key}Id`].type;
            newHash[formattedIdKey] = model[`${key}Id`].id;
          }
        } else {
          if (this.isCollection(association)) {
            let formattedKey = this.keyForRelationshipIds(key);

            newHash[formattedKey] = model[key].models.map((m) => m.id);
          } else if (association) {
            let formattedKey = this.keyForForeignKey(key);

            newHash[formattedKey] = model[`${key}Id`];
          }
        }
      });
    }

    return newHash;
  }
});
