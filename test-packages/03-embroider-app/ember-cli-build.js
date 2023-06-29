'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { V1Addon } = require('@embroider/compat');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    '@embroider/macros': {
      setConfig: {
        'ember-cli-mirage': {
          enabled: true,
        },
      },
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  //
  const compatAdapters = new Map();

  compatAdapters.set('ember-cli-mirage', class extends V1Addon {});

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    extraPublicTrees: [],
    staticAddonTrees: true,
    staticAddonTestSupportTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    splitControllers: true,
    splitRouteClasses: true,
    implicitModulesStrategy: 'packageNames',
    compatAdapters,
    packagerOptions: {
      webpackConfig: {
        devtool: 'source-map',
      },
    },
  });
};
