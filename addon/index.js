import Factory from './factory';
import Response from './response';
import faker from './faker';
import Model from './orm/model';
import Serializer from './serializer';
import ActiveModelSerializer from './serializers/active-model-serializer';
import JSONAPISerializer from './serializers/json-api-serializer';
import RestSerializer from './serializers/rest-serializer';
import HasMany from './orm/associations/has-many';
import HasOne from './orm/associations/has-one';
import BelongsTo from './orm/associations/belongs-to';

function hasMany(...args) {
  return new HasMany(...args);
}
function hasOne(...args) {
  return new HasOne(...args);
}
function belongsTo(...args) {
  return new BelongsTo(...args);
}

export {
  Factory,
  Response,
  faker,
  Model,
  Serializer,
  ActiveModelSerializer,
  JSONAPISerializer,
  RestSerializer,
  hasMany,
  hasOne,
  belongsTo
};

export default {
  Factory,
  Response,
  hasMany,
  hasOne,
  belongsTo
};
