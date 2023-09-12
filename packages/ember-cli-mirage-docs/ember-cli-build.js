'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
    },
    'ember-cli-addon-docs': {
      documentingAddonAt: '../ember-cli-mirage',
    },
    'ember-cli-addon-docs-esdoc': {
      packages: [
        // use below instead of 'ember-cli-mirage' otherwise API modules will be 'addon' instead of 'ember-cli-mirage'
        'ember-cli-mirage-docs',
      ],
    },
    'ember-composable-helpers': {
      only: ['sort-by'],
    },
  });

  return app.toTree();
};
