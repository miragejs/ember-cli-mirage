import ActiveModelSerializer from './active-model-serializer';
import { camelize } from '../utils/inflector';
import { toDbCollectionName } from 'ember-cli-mirage/utils/normalize-name';

export default ActiveModelSerializer.extend({

  keyForModel(type) {
    return camelize(type);
  },

  keyForAttribute(attr) {
    return camelize(attr);
  },

  keyForRelationship(type) {
    return toDbCollectionName(type);
  },

  keyForRelationshipIds(type) {
    return `${camelize(type)}Ids`;
  }
});
