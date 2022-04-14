'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
    },
    'ember-cli-addon-docs-esdoc': {
      packages: [
        'ember-cli-mirage',
        { name: 'miragejs', sourceDirectory: 'lib' },
      ],
    },
    'ember-composable-helpers': {
      only: ['sort-by'],
    },
    addons: {
      blacklist: ['ember-cli-fastboot'],
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
