'use strict';
const path = require('path');

module.exports = {
  name: require('./package').name,

  blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  },
};
