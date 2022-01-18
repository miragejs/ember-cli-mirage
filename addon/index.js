export {
  discoverEmberDataModels,
  applyEmberDataSerializers,
} from './ember-data';
export { default as EmberDataSerializer } from 'ember-cli-mirage/serializers/ember-data-serializer';

import { deprecateImport } from './deprecate-imports';

import { initDeprecatedReExports } from './deprecate-reexports';
initDeprecatedReExports();

import {
  Factory,
  Response,
  _ormAssociationsHasMany as HasMany,
  _ormAssociationsBelongsTo as BelongsTo,
} from 'miragejs';

const DeprecatedFactory = function (...args) {
  deprecateImport('Factory');

  return Factory.call(this, ...args);
};

// Copy extend
DeprecatedFactory.extend = Factory.extend;
DeprecatedFactory.extractAfterCreateCallbacks =
  Factory.extractAfterCreateCallbacks;
DeprecatedFactory.isTrait = Factory.isTrait;

// // Store a reference on the class for future subclasses
// DeprecatedFactory.attrs = newAttrs;

class DeprecatedResponse extends Response {
  constructor(...args) {
    deprecateImport('Response');

    super(...args);
  }
}

function hasMany(...args) {
  deprecateImport('hasMany');

  return new HasMany(...args);
}

function belongsTo(...args) {
  deprecateImport('belongsTo');

  return new BelongsTo(...args);
}

export default {
  Factory: DeprecatedFactory,
  Response: DeprecatedResponse,
  hasMany,
  belongsTo,
};
