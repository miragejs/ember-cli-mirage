import _assign from 'lodash/object/assign';
import _keys from 'lodash/object/keys';

var Factory = function() {
  this.build = function(sequence) {
    var object = {};
    var attrs = this.attrs || {};

    _keys(attrs).forEach(function(key) {
      var type = typeof attrs[key];

      if (key === 'afterCreate') {
        // no op
      } else if (type === 'function') {
        object[key] = attrs[key].call(attrs, sequence);
      } else {
        object[key] = attrs[key];
      }
    });

    return object;
  };
};

Factory.extend = function(attrs) {
  // Merge the new attributes with existing ones. If conflict, new ones win.
  var newAttrs = _assign({}, this.attrs, attrs);

  var Subclass = function() {
    this.attrs = newAttrs;
    Factory.call(this);
  };

  // Copy extend
  Subclass.extend = Factory.extend;

  // Store a reference on the class for future subclasses
  Subclass.attrs = newAttrs;

  return Subclass;
};

export default Factory;
