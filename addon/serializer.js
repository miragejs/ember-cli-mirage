/* global _ */
import Model from './orm/model';
import utilsExtend from './utils/extend';

class Serializer {

  serialize(response, request) {
    if (response instanceof Model) {
      return this._attrsForModel(response);

    } else {
      return response;
    }
  }

  keyForAttribute(key) {
    return key;
  }

  _attrsForModel(model) {
    let attrs = {};

    if (this.attrs) {
      attrs = this.attrs.reduce((memo, attr) => {
        memo[attr] = model[attr];
        return memo;
      }, {});
    } else {
      attrs = _.assign(attrs, model.attrs);
    }

    return this._formatAttributeKeys(attrs);
  }

  _formatAttributeKeys(attrs) {
    let formattedAttrs = {};

    for (let key in attrs) {
      let formattedKey = this.keyForAttribute(key);
      formattedAttrs[formattedKey] = attrs[key];
    }

    return formattedAttrs;
  }
}

// Defaults
Serializer.prototype.relationships = [];
Serializer.prototype.root = true;
Serializer.prototype.embed = false;

Serializer.extend = utilsExtend;

export default Serializer;
