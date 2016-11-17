import Serializer from '../serializer';
import { dasherize, pluralize, camelize } from '../utils/inflector';

import _get from 'lodash/object/get';
import _ from 'lodash';

export default Serializer.extend({

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

  getHashForIncludedResource(key, resource) {
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
      hash = resource.models.map(m => this._getResourceObjectForModel(m));
    }

    return hash;
  },

  /*
    Returns a flat unique list of resources that need to be added to includes
  */
  getAddToIncludesForResource(resource) {
    let relationshipPaths;

    if (_get(this, 'request.queryParams.include')) {
      relationshipPaths = this.request.queryParams.include.split(',');
    } else {
      let serializer = this.serializerFor(resource.modelName);
      relationshipPaths = serializer.getKeysForIncluded();
    }

    return this.getAddToIncludesForResourceAndPaths(resource, relationshipPaths);
  },

  getAddToIncludesForResourceAndPaths(resource, relationshipPaths) {
    let includes = [];

    relationshipPaths.forEach(path => {
      let relationshipNames = path.split('.');
      let newIncludes = this.getIncludesForResourceAndPath(resource, ...relationshipNames);

      includes = includes.concat(newIncludes);
    });

    return _(includes)
      .uniq(({ resource }) => resource.toString())
      .value();
  },

  getIncludesForResourceAndPath(resource, ...names) {
    let key = camelize(names.shift());
    let includes = [];
    let modelsToAdd = [];

    if (this.isModel(resource)) {
      modelsToAdd = modelsToAdd.concat(this._getModelsToAdd(key, resource[key]));
    } else {
      resource.models.forEach(model => {
        modelsToAdd = modelsToAdd.concat(this._getModelsToAdd(key, model[key]));
      });
    }

    // Add new models and remove empty relations
    includes = includes.concat(modelsToAdd).filter(model => model);

    if (names.length) {
      modelsToAdd.forEach(({ resource }) => {
        includes = includes.concat(this.getIncludesForResourceAndPath(resource, ...names));
      });
    }

    return includes;
  },

  _getModelsToAdd (key, resource) {
    if (this.isModel(resource)) {
      return [{ key, resource }];
    } else if (this.isCollection(resource)) {
      return resource.models.map(r => ({ key, resource: r }));
    }
  },

  _getResourceObjectForModel(model) {
    let attrs = this._attrsForModel(model, true);
    delete attrs.id;

    let hash = {
      type: this.typeKeyForModel(model),
      id: model.id,
      attributes: attrs
    };

    model.associationKeys.forEach(key => {
      let relationship = model[key];
      let relationshipKey = this.keyForRelationship(key);
      let relationshipHash;
      hash.relationships = hash.relationships || {};

      if (this.hasLinksForRelationship(model, key)) {
        let serializer = this.serializerFor(model.modelName);
        let links = serializer.links(model);
        relationshipHash = { links: links[key] };

      } else {
        let data = null;

        if (this.isModel(relationship)) {
          data = {
            type: this.typeKeyForModel(relationship),
            id: relationship.id
          };
        } else if (this.isCollection(relationship)) {
          data = relationship.models.map(model => {
            return {
              type: this.typeKeyForModel(model),
              id: model.id
            };
          });
        }

        relationshipHash = { data };
      }

      hash.relationships[relationshipKey] = relationshipHash;
    });

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

  getQueryParamIncludes() {
    return (_get(this, 'request.queryParams.include'));
  },

  hasQueryParamIncludes() {
    return !!this.getQueryParamIncludes();
  },

  typeKeyForModel(model) {
    return dasherize(pluralize(model.modelName));
  }

});
