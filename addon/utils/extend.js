import _assign from 'lodash/assign';
import _has from 'lodash/has';

export default function(protoProps, staticProps) {
  let parent = this;
  let child = class extends parent {
    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    constructor(...params) {
      super(...params);
      if (protoProps && _has(protoProps, 'constructor')) {
        return protoProps.constructor.apply(this, params);
      }
    }
  };

  _assign(child, staticProps);
  _assign(child.prototype, protoProps);

  // Set a convenience property in case the parent's prototype is needed
  // later.
  child.__super__ = parent.prototype;

  return child;
}
