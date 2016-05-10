/*jshint node:true*/

'use strict'

var path = require('path');

module.exports = {
  description: 'Generates a Mirage model.',

  fileMapTokens: function() {
    return {
      __root__: function(options) {
        // if (options.inAddon) {
        //   return path.join('tests', 'dummy');
        // }

        return '/app/';
      }
    };
  },
};
