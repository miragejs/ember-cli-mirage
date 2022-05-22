/* eslint-env node */

'use strict';

var path = require('path');

module.exports = {
  normalizeEntityName: function () {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  fileMapTokens: function () {
    var self = this;
    return {
      __root__: function (options) {
        if (
          !!self.project.config()['ember-cli-mirage'] &&
          !!self.project.config()['ember-cli-mirage'].directory
        ) {
          return self.project.config()['ember-cli-mirage'].directory;
        } else if (options.inAddon) {
          return path.join('tests', 'dummy', 'mirage');
        } else {
          return '/mirage';
        }
      },
    };
  },

  afterInstall: function () {
    return this.addPackagesToProject([{ name: 'miragejs' }]);
  },
};
