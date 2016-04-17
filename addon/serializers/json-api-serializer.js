// jscs:disable requireParenthesesAroundArrowParam
import extend from '../utils/extend';
import { dasherize, pluralize, camelize } from '../utils/inflector';
import Model from 'ember-cli-mirage/orm/model';
import Collection from 'ember-cli-mirage/orm/collection';
import _assign from 'lodash/object/assign';
import _flatten from 'lodash/array/flatten';
import _get from 'lodash/object/get';
import _trim from 'lodash/string/trim';
import _isString from 'lodash/lang/isString';
import _ from 'lodash';
import assert from '../assert';

function isCollection(object) {
  return object instanceof Collection;
}

class JsonApiSerializer {

  constructor(serializerMap, modelName, included=[], alreadySerialized={}) {
    this.modelName = modelName;
    this._serializerMap = serializerMap;
    this.included = included;
    this.alreadySerialized = alreadySerialized;
  }

  serialize(modelOrCollection, request={}) {
    let response;

    if (modelOrCollection instanceof Model) {
      response = this._serializePrimaryModel(modelOrCollection, request);
    } else {
      response = this._serializePrimaryCollection(modelOrCollection, request);
    }

    if (this.included.length) {
      response.included = this.included;
    }

    return response;
  }

  _serializePrimaryModel(model, request) {
    this._augmentAlreadySerialized(model);

    let response = {
      data: this._resourceObjectFor(model, request)
    };

    this._serializeRelationshipsFor(model, request);

    return response;
  }

  _serializePrimaryCollection(collection, request) {
    let response = {
      data: collection.models.map(model => this._resourceObjectFor(model, request))
    };

    collection.models.forEach(model => {
      this._serializeRelationshipsFor(model, request);
    });

    return response;
  }

  _serializeRelationshipsFor(model, request) {
    let relationshipNames = this._getRelationshipNames(request);

    relationshipNames.forEach(relationshipName => {
      let association = this._getRelatedWithPath(model, relationshipName);

      if (association instanceof Model) {
        let serializer = this._serializerFor(association);
        serializer._serializeIncludedModel.call(serializer, association, request);

      } else if (association) {
        association.forEach(model => {
          let serializer = this._serializerFor(model);
          serializer._serializeIncludedModel.call(serializer, model, request);
        });
      }
    });
  }

  _serializeIncludedModel(model, request) {
    if (this._hasBeenSerialized(model)) {
      return;
    }
    this._augmentAlreadySerialized(model);

    this.included.push(this._resourceObjectFor(model, request));
    this._serializeRelationshipsFor(model, request);
  }

  _resourceObjectFor(model /*, request */) {
    let attrs = this._attrsForModel(model);

    let obj = {
      type: this.typeKeyForModel(model),
      id: model.id,
      attributes: attrs
    };

    let linkData = this._linkDataFor(model);

    model.associationKeys.forEach(camelizedType => {
      let relationship = model[camelizedType];
      let relationshipKey = this.keyForRelationship(camelizedType);

      if (isCollection(relationship)) {
        if (!obj.relationships) {
          obj.relationships = {};
        }

        obj.relationships[relationshipKey] = {
          data: relationship.models.map(model => {
            return {
              type: this.typeKeyForModel(model),
              id: model.id
            };
          })
        };
      } else if (relationship) {
        if (!obj.relationships) {
          obj.relationships = {};
        }

        obj.relationships[relationshipKey] = {
          data: {
            type: this.typeKeyForModel(relationship),
            id: relationship.id
          }
        };
      }

      if (linkData && linkData[camelizedType]) {
        this._addLinkData(obj, relationshipKey, linkData[camelizedType]);
      }
    });

    return obj;
  }

  _linkDataFor(model) {
    let serializer = this._serializerFor(model);
    let linkData   = null;
    if (serializer && serializer.links) {
      linkData = serializer.links(model);
    }
    return linkData;
  }

  _addLinkData(json, relationshipKey, linkData) {
    if (!json.relationships[relationshipKey]) {
      json.relationships[relationshipKey] = {};
    }

    delete json.relationships[relationshipKey].data;
    json.relationships[relationshipKey].links = {};

    if (linkData.self) {
      json.relationships[relationshipKey].links.self = { href: linkData.self };
    }

    if (linkData.related) {
      json.relationships[relationshipKey].links.related = { href: linkData.related };
    }
  }

  keyForAttribute(attr) {
    return dasherize(attr);
  }

  keyForRelationship(key) {
    return dasherize(key);
  }

  typeKeyForModel(model) {
    return dasherize(pluralize(model.modelName));
  }

  normalize(json) {
    return json;
  }

  _attrsForModel(model) {
    let attrs = {};

    if (this.attrs) {
      attrs = this.attrs.reduce((memo, attr) => {
        memo[attr] = model[attr];
        return memo;
      }, {});
    } else {
      attrs = _assign(attrs, model.attrs);
    }

    delete attrs.id;

    model.fks.forEach(fk => {
      delete attrs[fk];
    });

    return this._formatAttributeKeys(attrs);
  }

  _formatAttributeKeys(attrs) {
    let formattedAttrs = {};

    for (let key in attrs) {
      let formattedKey = this.keyForAttribute(key);
      formattedAttrs[formattedKey] = attrs[key];
    }

    return formattedAttrs;
  }

  // TODO: this method is duplicated. We should just use the one
  // in serializer-registry, meaning we should pass in a ref to that
  // object
  _serializerFor(modelOrCollection) {
    let camelizedModelName = camelize(modelOrCollection.modelName);
    let ModelSerializer = this._serializerMap && (this._serializerMap[camelizedModelName] || this._serializerMap.application);

    /*
      TODO: This check should exist within the Serializer class, when the logic is moved from the registry to the
      individual serializers (see TODO above).
    */
    assert(
      !ModelSerializer ||
      ModelSerializer.prototype.embed ||
      ModelSerializer.prototype.root ||
      (new ModelSerializer() instanceof JsonApiSerializer),
      'You cannot have a serializer that sideloads (embed: false) and disables the root (root: false).'
    );

    return ModelSerializer ? new ModelSerializer(this._serializerMap, modelOrCollection.modelName, this.included, this.alreadySerialized) : this.baseSerializer;
  }

  _hasBeenSerialized(model) {
    let relationshipKey = `${model.modelName}Ids`;
    let obj = this.alreadySerialized[relationshipKey];
    return obj && obj.indexOf(model.id) > -1;
  }

  _augmentAlreadySerialized(model) {
    let modelKey = `${model.modelName}Ids`;

    this.alreadySerialized[modelKey] = this.alreadySerialized[modelKey] || [];
    this.alreadySerialized[modelKey].push(model.id);
  }

  _getRelationshipNames(request = {}) {
    let requestRelationships = _get(request, 'queryParams.include');

    if (_isString(requestRelationships)) {
      if (requestRelationships.length) {
        let relationships = requestRelationships
          .split(',')
          .map(_trim)
          .map((r) => r.split('.').map((_, index, elements) => elements.slice(0, index + 1).join('.')));

        return _flatten(relationships);
      }
      return [];
    }

    return _get(this, 'include', []);
  }

  _getRelatedWithPath(parentModel, path) {
    return path
      .split('.')
      .reduce((related, relationshipName) => {
        return _(related)
          .map(r => r.reload()[camelize(relationshipName)])
          .map(r => isCollection(r) ? r.models : r) // Turning Collections into Arrays for lodash to recognize
          .flatten()
          .filter()
          .value();
      }, [parentModel]);
  }

  toString() {
    return `serializer:${this.modelName}`;
  }
}

// Defaults
JsonApiSerializer.prototype.include = [];

JsonApiSerializer.extend = extend;

export default JsonApiSerializer;
