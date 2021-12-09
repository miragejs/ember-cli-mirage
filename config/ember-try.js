'use strict';

const getChannelURL = require('ember-source-channel-url');
// const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            'ember-source': '~3.20.5',
          },
        },
      },
      {
        name: 'ember-lts-3.24',
        npm: {
          devDependencies: {
            'ember-source': '~3.24.3',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            'ember-cli-addon-docs': null,
          },
          dependencies: {
            'ember-auto-import': '^2.2.4',
            'webpack': '^5.64.4'
          },
          ember: {
            edition: 'octane',
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            'ember-cli-addon-docs': null,
          },
          dependencies: {
            'ember-auto-import': '^2.2.4',
            'webpack': '^5.64.4'
          },
          ember: {
            edition: 'octane',
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            'ember-cli-addon-docs': null,
          },
          dependencies: {
            'ember-auto-import': '^2.2.4',
            'webpack': '^5.64.4'
          },
          ember: {
            edition: 'octane',
          },
        },
      },
      {
        name: 'ember-default-with-jquery',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'jquery-integration': true,
          }),
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^1.1.0',
          },
        },
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false,
          }),
        },
        npm: {
          devDependencies: {
            'ember-source': '~3.24.0',
          },
          ember: {
            edition: 'classic',
          },
        },
      },
      // embroiderSafe(),
      // embroiderOptimized(),
    ],
  };
};
