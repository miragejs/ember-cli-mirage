/* global requirejs */

import require from 'require';
import config from 'ember-get-config';
import assert from './assert';
import { hasEmberData, isDsModel } from 'ember-cli-mirage/utils/ember-data';
import { Model, belongsTo, hasMany } from 'miragejs';
import EmberDataSerializer from 'ember-cli-mirage/serializers/ember-data-serializer';
import { _utilsInflectorCamelize as camelize } from 'miragejs';

const { modulePrefix, podModulePrefix } = config || {};

// Caches
let DsModels, Models;
let DsSerializers, Serializers;

/**
 * Get all ember data models under the app's namespaces
 *
 * @method getDsModels
 * @private
 * @hide
 * @param {StoreService} store
 * @return {Object} models
 */
export function getDsModels(store) {
  if (DsModels) {
    return DsModels;
  }

  let moduleMap = requirejs.entries;
  let classicModelMatchRegex = new RegExp(`^${modulePrefix}/models/(.*)$`, 'i');
  let podModelMatchRegex = new RegExp(
    `^${podModulePrefix || modulePrefix}/(.*)/model$`,
    'i',
  );

  DsModels = {};

  if (!hasEmberData) {
    return DsModels;
  }

  Object.keys(moduleMap).forEach((path) => {
    let matches =
      path.match(classicModelMatchRegex) || path.match(podModelMatchRegex);
    if (matches && matches[1]) {
      let modelName = matches[1];

      let model = store.modelFor(modelName);
      if (isDsModel(model)) {
        DsModels[modelName] = model;
      }
    }
  });

  return DsModels;
}

/**
 * Get all mirage models for each of the ember-data models
 *
 * @method discoverEmberDataModels
 * @param {StoreService} store
 * @return {Object} models
 */
export function discoverEmberDataModels(store) {
  if (Models || !store) {
    return Models;
  }

  let emberDataModels = getDsModels(store);
  Models = {};

  Object.keys(emberDataModels).forEach((modelName) => {
    let model = emberDataModels[modelName];
    let attrs = {};

    model.eachRelationship((name, r) => {
      if (r.kind === 'belongsTo') {
        attrs[name] = belongsTo(r.type, r.options);
      } else if (r.kind === 'hasMany') {
        attrs[name] = hasMany(r.type, r.options);
      }
    });

    Models[modelName] = Model.extend(attrs);
  });

  return Models;
}

/**
 * A lookup method for an autogenerated model
 *
 * @method modelFor
 * @private
 * @param  {String} name
 * @return {Model}
 * @hide
 */
export function modelFor(name) {
  let models = discoverEmberDataModels();
  assert(!!models[name], `Model of type '${name}' does not exist.`);
  return models[name];
}

/**
 * Get all ember data serializers under the app's namespaces
 *
 * @method getDsSerializers
 * @private
 * @hide
 * @return {Object} serializers
 */
export function getDsSerializers() {
  if (DsSerializers) {
    return DsSerializers;
  }

  let moduleMap = requirejs.entries;
  let classicSerializerMatchRegex = new RegExp(
    `^${modulePrefix}/serializers/(.*)$`,
    'i',
  );
  let podSerializerMatchRegex = new RegExp(
    `^${podModulePrefix || modulePrefix}/(.*)/serializer$`,
    'i',
  );

  DsSerializers = {};

  if (!hasEmberData) {
    return DsSerializers;
  }

  Object.keys(moduleMap).forEach((path) => {
    let matches =
      path.match(classicSerializerMatchRegex) ||
      path.match(podSerializerMatchRegex);
    if (matches && matches[1]) {
      let serializerName = matches[1];

      let serializer = require(path, null, null, true).default;
      // in mirage, registering models takes care of camelize, serializers do not
      DsSerializers[camelize(serializerName)] = serializer;
    }
  });

  return DsSerializers;
}

/**
 * Generate mirage serializers for each of the ember-data serializers
 * if a mirage serializer already exists, apply the ember-data transforms
 *
 * @method applyEmberDataSerializers
 * @return {Object} serializers
 */
export function applyEmberDataSerializers(mirageSerializers = {}) {
  if (Serializers) {
    return Serializers;
  }

  let emberDataSerializers = getDsSerializers();

  // Start off with the mirage serializers,
  // so if there are any mirage serializers with no ED counterpart, they are in the list
  Serializers = mirageSerializers;

  Object.keys(emberDataSerializers).forEach((serializerName) => {
    let dsSerializer = emberDataSerializers[serializerName];

    // Seems I have to create it to get access to some of the properties
    dsSerializer = dsSerializer.create
      ? dsSerializer.create()
      : new dsSerializer();

    let transforms;
    let primaryKey = dsSerializer.primaryKey;
    let attrs = dsSerializer.attrs;
    if (primaryKey || attrs) {
      let Serializer =
        mirageSerializers[serializerName] ||
        mirageSerializers.application ||
        EmberDataSerializer;

      if (attrs) {
        let serializer = Serializer.create
          ? Serializer.create()
          : new Serializer();

        transforms = serializer.transforms || {};

        Object.keys(attrs).forEach((key) => {
          let transform = attrs[key];
          let serializerTransform = serializer.transforms
            ? serializer.transforms[key]
            : {};
          let resolvedTransform =
            typeof attrs[key] === 'string'
              ? {
                  key: attrs[key],
                }
              : {
                  key: attrs[key].key,
                };

          if (transform.serialize !== undefined) {
            resolvedTransform.deserialize = transform.serialize;
          }

          if (transform.deserialize !== undefined) {
            resolvedTransform.serialize = transform.deserialize;
          }

          transforms[key] = Object.assign(
            resolvedTransform,
            serializerTransform,
          );
        });
      }

      Serializers[serializerName] = Serializer.extend({
        primaryKey,
        transforms,
      });
    }
  });

  return Serializers;
}
