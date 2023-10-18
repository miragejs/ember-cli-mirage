'use strict';

const fs = require('fs');
const path = require('path');

function usingProxy() {
  const usingProxyArg = !!process.argv.filter(function (arg) {
    return (
      arg.indexOf('--proxy') === 0 ||
      arg.indexOf('-pr') === 0 ||
      arg.indexOf('-pxy') === 0
    );
  }).length;

  let hasGeneratedProxies = false;
  const proxiesDir = path.join(process.cwd(), 'server', 'proxies');

  try {
    fs.lstatSync(proxiesDir);
    hasGeneratedProxies = true;
  } catch (e) {
    // ignore
  }

  return usingProxyArg || hasGeneratedProxies;
}

module.exports = function (environment, appConfig) {
  appConfig['ember-cli-mirage'] = appConfig['ember-cli-mirage'] || {};
  appConfig['ember-cli-mirage'].usingProxy = usingProxy();
  appConfig['ember-cli-mirage'].useDefaultPassthroughs = true;

  return {};
};
