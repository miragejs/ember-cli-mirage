/* eslint no-global-assign: "off"*/
// require = require("esm")(module);
// module.exports = require("../addon/server2.js");

const esmRequire = require("esm")(module, { cjs: true });
module.exports = esmRequire('../addon/server').default;
