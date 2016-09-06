// jscs:disable requireParenthesesAroundArrowParam
import Model from 'ember-cli-mirage/orm/model';
import Collection from 'ember-cli-mirage/orm/collection';
import Serializer from 'ember-cli-mirage/serializer';
import JsonApiSerializer from 'ember-cli-mirage/serializers/json-api-serializer';
import { pluralize, camelize } from './utils/inflector';
import assert from './assert';

import _assign from 'lodash/object/assign';
import _isArray from 'lodash/lang/isArray';

export default class SerializerRegistry {

  constructor(schema, serializerMap = {}) {
    this.schema = schema;
    this._serializerMap = serializerMap;
  }

  normalize(payload, modelName) {
    return this.serializerFor(modelName).normalize(payload);
  }

  serialize(response, request) {
    if (this._isModelOrCollection(response)) {
      let serializer = this.serializerFor(response.modelName);

      return serializer.serialize(response, request, this.schema);
    } else if (_isArray(response) && response.filter(this._isCollection).length) {
      return response.reduce((json, collection) => {
        let serializer = this.serializerFor(collection.modelName);

        if (serializer.embed) {
          json[pluralize(collection.modelName)] = serializer._serializeModelOrCollection(collection, request);
        } else {
          json = _assign(json, serializer._serializeSideloadedModelOrCollection(collection, request));
        }

        return json;
      }, {});

    } else {
      return response;
    }
  }

  serializerFor(type, { explicit = false, included = [], alreadySerialized = {} } = {}) {
    let SerializerForResponse = this._serializerMap && (this._serializerMap[camelize(type)]);

    if (explicit) {
      assert(!!SerializerForResponse, `You passed in ${type} as an explicit serializer type but that serializer doesn't exist. Try running \`ember g mirage-serializer ${type}\`.`);
    } else {
      SerializerForResponse = SerializerForResponse || this._serializerMap.application || Serializer;

      assert(
        !SerializerForResponse ||
        (SerializerForResponse.prototype.embed) ||
        (SerializerForResponse.prototype.root) ||
        (new SerializerForResponse() instanceof JsonApiSerializer),
        'You cannot have a serializer that sideloads (embed: false) and disables the root (root: false).'
      );
    }

    return new SerializerForResponse(this, type, included, alreadySerialized);
  }

  _isModel(object) {
    return object instanceof Model;
  }

  _isCollection(object) {
    return object instanceof Collection;
  }

  _isModelOrCollection(object) {
    return this._isModel(object) || this._isCollection(object);
  }

}
