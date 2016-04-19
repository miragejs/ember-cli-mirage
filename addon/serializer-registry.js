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
    if (this.isModelOrCollection(response)) {
      let serializer = this.serializerFor(response.modelName);

      return serializer.serialize(response, request);
    } else if (_isArray(response) && response.filter(this.isCollection).length) {
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

      /*
      TODO: This check should exist within the Serializer class, when the logic is moved from the registry to the
      individual serializers (see TODO above).
      */
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

  isModel(object) {
    return object instanceof Model;
  }

  isCollection(object) {
    return object instanceof Collection;
  }

  isModelOrCollection(object) {
    return this.isModel(object) || this.isCollection(object);
  }

}
