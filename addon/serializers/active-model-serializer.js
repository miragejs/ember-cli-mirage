import Serializer from '../serializer';
import { underscore, pluralize, dasherize } from '../utils/inflector';

export default Serializer.extend({

  keyForModel(modelTypeKey) {
    return underscore(modelTypeKey);
  },

  keyForAttribute(attr) {
    return underscore(attr);
  },

  keyForRelationship(modelTypeKey) {
    return pluralize(underscore(modelTypeKey));
  },

  keyForRelationshipIds(modelTypeKey) {
    return `${underscore(modelTypeKey)}_ids`;
  },

  normalize(payload) {
    let type = Object.keys(payload)[0];
    let attrs = payload[type];

    let jsonApiPayload = {
      data: {
        type: pluralize(type),
        attributes: {}
      }
    };
    if (attrs.id) {
      jsonApiPayload.data.id = attrs.id;
    }
    Object.keys(attrs).forEach(key => {
      if (key !== 'id') {
        jsonApiPayload.data.attributes[dasherize(key)] = attrs[key];
      }
    });

    return jsonApiPayload;
  }

});
