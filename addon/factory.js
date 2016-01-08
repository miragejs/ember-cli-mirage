import _assign from 'lodash/object/assign';
import _isArray from 'lodash/lang/isArray';
import _isFunction from 'lodash/lang/isFunction';
import _isPlainObject from 'lodash/lang/isPlainObject';
import _mapValues from 'lodash/object/mapValues';

function buildValue(value, parentAttrs, sequence) {
  if (_isArray(value)) {
    return value.map((val) => buildValue(val, value, sequence));
  } else if (_isPlainObject(value)) {
    return _mapValues(value, (val) => buildValue(val, value, sequence));
  } else if (_isFunction(value)) {
    return value.call(parentAttrs, sequence);
  } else {
    return value;
  }
}

var Factory = function() {
  this.build = function(sequence) {
    return this.attrs ? buildValue(this.attrs, null, sequence) : {};
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
