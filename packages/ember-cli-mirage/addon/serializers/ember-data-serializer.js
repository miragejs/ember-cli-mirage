import {
  RestSerializer,
  _utilsInflectorCamelize as camelize,
  _utilsInflectorDasherize as dasherize,
} from 'miragejs';
import { get } from '@ember/object';

/**
 * This serializer does not use following mirage properties to control how things are serialized
 *
 *     attrs - see `serialize` on the transform property
 *     embed - see `serialize` on the transform property
 *     serializeIds - see serialize on the transform property
 *
 * The above configuration was applied to every property on the serializer, whereas the transforms allows you
 * to specify a value for each property or relation.
 *
 * This serializer uses a property `transforms` that follows the Ember Data serializer format of `attrs` to specify the
 * serialization (`attrs` is already in use by mirageJs).
 *
 * The startMirage has been modified to also generate serializers from the Ember Data serializers supporting
 * the key and the serialize/deserialize properties with the value of (true/ids/records). If a serializer is
 * already present in the mirage directory, the transforms will be added to it. If that serializer is not
 * a serializer of this type, there will be no effect.  Ensure that your serializers and/or the application
 * serializer in the mirage directory is a type of this serializer
 *
 * @class EmberDataSerializer
 * @constructor
 * @public
 *
 */
let EmberDataSerializer = RestSerializer.extend({
  /**
   * The property name for the primary key for mirage and ember data is normally `id`. This allows you
   * to specify what that property name should be in the JSON.
   */
  primaryKey: 'id',

  /**
   * Transforms follow the format of ember data serializer attrs as follows
   *
   * {
   *   property: {    // property would be the name of the property in the mirage store
   *      key: 'externalKey',   // externalKey would be the name in the JSON
   *      serialize: 'ids',     // how should this property be serialized and deserialized
   *      deserialize: 'ids'    // the default is 'ids' that is the id of the releation
   *                            // or 'records', that is, embed the full record instead of the id
   *                            // or false, do not serialize or deserialize as applied
   *   }
   * }
   *
   * These transforms will be created from the attrs on the corresponding serializer in ember data much like
   * the models for mirage are created from the models in in ember date. If the transforms key is specified, it
   * will overlay the definition created from the serializer key for key. That is you could override some
   * of the transform definition.
   */
  transforms: undefined,
  // resolved transforms
  _transforms: undefined,

  // These are the defaults
  // include: []

  keyForId() {
    return this.primaryKey;
  },

  getKeysForIncluded() {
    return typeof this.include === 'function'
      ? this.include(this.request, this.primaryResource)
      : this.include;
  },

  getTransforms() {
    return this.transforms || {};
  },

  getResolvedTransforms() {
    if (!this._resolvedTransforms) {
      this._resolvedTransforms = {
        serialize: {},
        normalize: {},
      };
    }

    return this._resolvedTransforms;
  },

  getTransformForSerialize(key) {
    let resolvedTransforms = this.getResolvedTransforms();
    let transforms = this.getTransforms();

    if (!resolvedTransforms.serialize[key]) {
      let transform =
        typeof transforms[key] === 'string'
          ? { key: transforms[key] }
          : Object.assign({}, transforms[key]);

      resolvedTransforms.serialize[key] = Object.assign(
        { key: key, serialize: 'ids', deserialize: 'ids' },
        transform,
      );
    }

    return resolvedTransforms.serialize[key];
  },

  getTransformForNormalize(key) {
    let resolvedTransforms = this.getResolvedTransforms();

    if (!resolvedTransforms.normalize[key]) {
      let transforms = this.getTransforms();
      let foundKey;
      let foundTransform = Object.keys(transforms).find((item) => {
        foundKey = item;
        return transforms[item].key === key;
      });
      let transform = foundTransform
        ? Object.assign({}, transforms[foundKey], { key: foundKey })
        : { key: key, serialize: 'ids', deserialize: 'ids' };

      resolvedTransforms.normalize[key] = transform;
    }

    return resolvedTransforms.normalize[key];
  },

  /**
   *
   * @param model
   * @param removeForeignKeys
   * @param didSerialize
   * @returns {*}
   * @private
   */
  _hashForModel(model, removeForeignKeys, didSerialize = {}) {
    let attrs = this._attrsForModel(model);

    let newDidSerialize = Object.assign({}, didSerialize);
    newDidSerialize[model.modelName] = newDidSerialize[model.modelName] || {};
    newDidSerialize[model.modelName][model.id] = true;

    model.associationKeys.forEach((key) => {
      let transform = this.getTransformForSerialize(key);

      if (transform.serialize) {
        let associatedResource = model[key];

        let serializeOption = transform.serialize;

        if (
          associatedResource &&
          get(
            newDidSerialize,
            `${associatedResource.modelName}.${associatedResource.id}`,
          )
        ) {
          // force it to IDS if we already have serialized it to prevent recursion
          // TODO: However is the end system wants records, we need to send records, so this really should be do records, dont resurse
          serializeOption = 'ids';
        }

        if (serializeOption === 'records') {
          let [associatedResourceHash] = this.getHashForResource(
            associatedResource,
            false,
            newDidSerialize,
            true,
          );
          let formattedKey =
            this._keyForProperty(key) || this.isCollection(associatedResource)
              ? this.keyForRelationship(key)
              : this.keyForEmbeddedRelationship(key);
          attrs[formattedKey] = associatedResourceHash;
        } else {
          let formattedKey =
            this._keyForProperty(key) || this.keyForRelationshipIds(key);

          if (this.isCollection(associatedResource)) {
            attrs[formattedKey] =
              model[`${this._container.inflector.singularize(key)}Ids`];
          } else {
            attrs[formattedKey] =
              model[`${this._container.inflector.singularize(key)}Id`];
          }
        }
      }
    });

    return attrs;
  },

  _keyForProperty(attr) {
    let transform = this.getTransformForSerialize(attr);

    return transform.key;
  },

  keyForAttribute(attr) {
    if (attr === 'id') {
      return this.keyForId();
    }

    return (
      this._keyForProperty(attr) ||
      RestSerializer.prototype.keyForAttribute.apply(this, arguments)
    );
  },

  keyForRelationship(type) {
    return (
      this._keyForProperty(type) ||
      RestSerializer.prototype.keyForRelationship.apply(this, arguments)
    );
  },

  keyForEmbeddedRelationship(attributeName) {
    return (
      this._keyForProperty(attributeName) ||
      RestSerializer.prototype.keyForEmbeddedRelationship.apply(this, arguments)
    );
  },

  keyForRelationshipIds(type) {
    return (
      this._keyForProperty(type) ||
      RestSerializer.prototype.keyForRelationshipIds.apply(this, arguments)
    );
  },

  keyForForeignKey(relationshipName) {
    return (
      this._keyForProperty(relationshipName) ||
      RestSerializer.prototype.keyForForeignKey.apply(this, arguments)
    );
  },

  normalize(payload) {
    // was it not wrapped when serialized?
    if (this.root === false) {
      let p = {};
      p[this.type] = payload;
      payload = p;
    }

    let type = Object.keys(payload)[0];
    let attrs = payload[type];
    let modelName = camelize(type);
    let modelClass = this.schema.modelClassFor(modelName);
    let { belongsToAssociations, hasManyAssociations } = modelClass;
    let belongsToKeys = Object.keys(belongsToAssociations);
    let hasManyKeys = Object.keys(hasManyAssociations);

    let jsonApiPayload = {
      data: {
        type: this._container.inflector.pluralize(type),
        attributes: {},
      },
    };

    if (attrs[this.primaryKey]) {
      jsonApiPayload.data.id = attrs[this.primaryKey];
    }

    let relationships = {};

    Object.keys(attrs).forEach((attrKey) => {
      if (attrKey !== this.primaryKey) {
        let transform = this.getTransformForNormalize(attrKey);
        let key = transform.key || attrKey;
        if (this.normalizeIds) {
          if (belongsToKeys.includes(key)) {
            let association = belongsToAssociations[key];
            let associationModel = association.modelName;
            relationships[dasherize(key)] = {
              data: {
                type: associationModel,
                id: attrs[attrKey],
              },
            };
          } else if (hasManyKeys.includes(key)) {
            let association = hasManyAssociations[key];
            let associationModel = association.modelName;
            let data = attrs[attrKey].map((id) => {
              return {
                type: associationModel,
                id,
              };
            });
            relationships[dasherize(key)] = { data };
          } else {
            jsonApiPayload.data.attributes[dasherize(key)] = attrs[attrKey];
          }
        } else {
          jsonApiPayload.data.attributes[dasherize(key)] = attrs[attrKey];
        }
      }
    });

    if (Object.keys(relationships).length) {
      jsonApiPayload.data.relationships = relationships;
    }

    return jsonApiPayload;
  },
});

export default EmberDataSerializer;
