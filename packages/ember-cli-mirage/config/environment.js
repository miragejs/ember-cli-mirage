'use strict';

const fs = require('fs');

function usingProxy() {
  const usingProxyArg = !!process.argv.filter(function (arg) {
    return (
      arg.indexOf('--proxy') === 0 ||
      arg.indexOf('-pr') === 0 ||
      arg.indexOf('-pxy') === 0
    );
  }).length;

  let hasGeneratedProxies = false;
  const proxiesDir = `${process.env.PWD}/server/proxies`;

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
