'use strict';
const path = require('path');

module.exports = {
  name: require('./package').name,

  options: {
    '@embroider/macros': {
      setOwnConfig: {
        enabled: false,
      },
    },
  },

  blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  },

  included() {
    let isEnabled = this.options['@embroider/macros']?.setOwnConfig?.enabled;

    if (!isEnabled) {
      return;
    }

    this._super.included.apply(this, arguments);
  },
};
