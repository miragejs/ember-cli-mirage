import Serializer from '../serializer';
import { dasherize, pluralize, camelize } from '../utils/inflector';

import _get from 'lodash/get';
import _ from 'lodash';

const JSONAPISerializer = Serializer.extend({

  keyForModel(modelName) {
    return dasherize(modelName);
  },

  keyForCollection(modelName) {
    return dasherize(modelName);
  },

  keyForAttribute(attr) {
    return dasherize(attr);
  },

  keyForRelationship(key) {
    return dasherize(key);
  },

  getHashForPrimaryResource(resource) {
    let resourceHash = this.getHashForResource(resource);
    let hashWithRoot = { data: resourceHash };
    let addToIncludes = this.getAddToIncludesForResource(resource);

    return [ hashWithRoot, addToIncludes ];
  },

  getHashForIncludedResource(resource) {
    let serializer = this.serializerFor(resource.modelName);
    let hash = serializer.getHashForResource(resource);
    let hashWithRoot = { included: (this.isModel(resource) ? [ hash ] : hash) };
    let addToIncludes = [];

    if (!this.hasQueryParamIncludes()) {
      addToIncludes = this.getAddToIncludesForResource(resource);
    }

    return [ hashWithRoot, addToIncludes ];
  },

  getHashForResource(resource) {
    let hash;

    if (this.isModel(resource)) {
      hash = this._getResourceObjectForModel(resource);
    } else {
      hash = resource.models.map((m) => this._getResourceObjectForModel(m));
    }

    return hash;
  },

  /*
    Returns a flat unique list of resources that need to be added to includes
  */
  getAddToIncludesForResource(resource) {
    let relationshipPaths;

    if (this.hasQueryParamIncludes()) {
      let { include } = this.request.queryParams;
      relationshipPaths = this._getIncludedRelationshipsAsArray(include);
    } else {
      let serializer = this.serializerFor(resource.modelName);
      relationshipPaths = serializer.getKeysForIncluded();
    }

    return this.getAddToIncludesForResourceAndPaths(resource, relationshipPaths);
  },

  getAddToIncludesForResourceAndPaths(resource, relationshipPaths) {
    let includes = [];

    relationshipPaths.forEach((path) => {
      let relationshipNames = path.split('.');
      let newIncludes = this.getIncludesForResourceAndPath(resource, ...relationshipNames);
      includes.push(newIncludes);
    });

    return _(includes)
      .flatten()
      .compact()
      .uniqBy(m => m.toString())
      .value();
  },

  getIncludesForResourceAndPath(resource, ...names) {
    let nameForCurrentResource = camelize(names.shift());
    let includes = [];
    let modelsToAdd = [];

    if (this.isModel(resource)) {
      let relationship = resource[nameForCurrentResource];

      if (this.isModel(relationship)) {
        modelsToAdd = [ relationship ];
      } else if (this.isCollection(relationship)) {
        modelsToAdd = relationship.models;
      }

    } else {
      resource.models.forEach((model) => {
        let relationship = model[nameForCurrentResource];

        if (this.isModel(relationship)) {
          modelsToAdd.push(relationship);
        } else if (this.isCollection(relationship)) {
          modelsToAdd = modelsToAdd.concat(relationship.models);
        }
      });
    }

    includes = includes.concat(modelsToAdd);

    if (names.length) {
      modelsToAdd.forEach((model) => {
        includes = includes.concat(this.getIncludesForResourceAndPath(model, ...names));
      });
    }

    return includes;
  },

  _getResourceObjectForModel(model) {
    let attrs = this._attrsForModel(model, true);
    delete attrs.id;

    let hash = {
      type: this.typeKeyForModel(model),
      id: model.id,
      attributes: attrs
    };

    return this._maybeAddRelationshipsToResourceObjectForModel(hash, model);
  },

  _maybeAddRelationshipsToResourceObjectForModel(hash, model) {
    let relationships = model.associationKeys.reduce((relationships, key) => {
      let relationship = model[key];
      let relationshipKey = this.keyForRelationship(key);
      let relationshipHash = {};

      if (this.hasLinksForRelationship(model, key)) {
        let serializer = this.serializerFor(model.modelName);
        let links = serializer.links(model);
        relationshipHash.links = links[key];
      }

      if (this.alwaysIncludeLinkageData || this._relationshipIsIncluded(key)) {
        let data = null;
        if (this.isModel(relationship)) {
          data = {
            type: this.typeKeyForModel(relationship),
            id: relationship.id
          };
        } else if (this.isCollection(relationship)) {
          data = relationship.models.map((model) => {
            return {
              type: this.typeKeyForModel(model),
              id: model.id
            };
          });
        }
        relationshipHash.data = data;
      }

      if (!_.isEmpty(relationshipHash)) {
        relationships[relationshipKey] = relationshipHash;
      }

      return relationships;
    }, {});

    if (!_.isEmpty(relationships)) {
      hash.relationships = relationships;
    }

    return hash;
  },

  hasLinksForRelationship(model, relationshipKey) {
    let serializer = this.serializerFor(model.modelName);
    let links;
    if (serializer.links) {
      links = serializer.links(model);

      return links[relationshipKey] != null;
    }
  },

  _relationshipIsIncluded(relationshipKey) {
    if (this.hasQueryParamIncludes()) {
      let relationshipKeyAsString = this.keyForRelationship(relationshipKey);
      let { include } = this.request.queryParams;
      let includedRelationships = this._getIncludedRelationshipsAsArray(include);
      return includedRelationships
        .some(str => str.indexOf(relationshipKeyAsString) > -1);
    } else {
      let relationshipPaths = this.getKeysForIncluded();

      return relationshipPaths.includes(relationshipKey);
    }
  },

  _getIncludedRelationshipsAsArray(included) {
    return Array.isArray(included)
      ? included
      : included.split(',');
  },

  getQueryParamIncludes() {
    return (_get(this, 'request.queryParams.include'));
  },

  hasQueryParamIncludes() {
    return !!this.getQueryParamIncludes();
  },

  typeKeyForModel(model) {
    return dasherize(pluralize(model.modelName));
  },

  getCoalescedIds(request) {
    let ids = request.queryParams && request.queryParams['filter[id]'];
    if (typeof ids === 'string') {
      return ids.split(',');
    }
    return ids;
  }
});

JSONAPISerializer.prototype.alwaysIncludeLinkageData = false;

export default JSONAPISerializer;
