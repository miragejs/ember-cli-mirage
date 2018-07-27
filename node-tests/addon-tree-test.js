/* eslint-env node */

let path = require('path');
let fs = require('fs');
let { createBuilder, createTempDir } = require('broccoli-test-helper');
let expect = require('chai').expect;
let EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const _resetTreeCache = require('ember-cli/lib/models/addon')._resetTreeCache;
const ADDON_ROOT = path.resolve(__dirname, '..');

function loadScenario(input, scenario) {
  input.write(require(`./fixtures/${scenario}/application`)());
  fs.symlinkSync(path.join(ADDON_ROOT, 'node_modules'), path.join(input.path(), 'node_modules'));
  fs.symlinkSync(ADDON_ROOT, path.join(input.path(), 'ember-cli-mirage'));
  process.chdir(path.join(input.path(), 'application'));
  process.env.EMBER_ENV = 'development';
}

describe('build target', function() {
  this.timeout(50000);
  let cwd;
  let input;
  let output;

  beforeEach(async function() {
    cwd = process.cwd();
    input = await createTempDir();
  });

  afterEach(async function() {
    process.chdir(cwd);
    _resetTreeCache();
    await input.dispose();
    await output.dispose();
  });

  // it('includes all mirage modules in development', async() => {
  //   let addon = new EmberAddon();
  //   output = createBuilder(addon.toTree());
  //   await output.build();
  //
  //   let files = output.read();
  //   let mirageModulesInBuild = files.assets['vendor.js']
  //     .split('\n')
  //     .filter(line => line.match(";define\\('ember-cli-mirage"));
  //
  //   expect(mirageModulesInBuild.length).to.be.above(1);
  // });

  it("only include mirage's initializer in production", async() => {
    process.env.EMBER_ENV = 'production';
    output = createBuilder(new EmberAddon().toTree());

    await output.build();

    let files = output.read();
    console.log(files);
    debugger;

    let vendorFileName = Object.keys(files.assets).find(str => str.match('^vendor'));
    let mirageModulesInBuild = files.assets[vendorFileName]
      .split('\n')
      .filter(line => line.match(";define\\('ember-cli-mirage"));
    //
    // expect(mirageModulesInBuild.length).to.equal(1);
  });
});

// function getMirageAddon(options) {
//   options = options || {};
//   options['ember-cli-mirage'] = options['ember-cli-mirage'] || {};
//   options['ember-cli-mirage'].directory = options['ember-cli-mirage'].directory || path.resolve(__dirname, path.join('..', 'dummy', 'mirage'));
//
//   var dummyApp = new EmberAddon(options);
//
//   return findMirage(dummyApp);
// }
//
// function findMirage(app) {
//   var addons = app.project.addons;
//   for (var i = 0; i < addons.length; i++) {
//     if (addons[i].name === 'ember-cli-mirage') {
//       return addons[i];
//     }
//   }
// }

// describe('Addon', function() {
//   this.timeout(15000);
//
//   afterEach(function() {
//     delete process.env.EMBER_ENV;
//   });
//
//   var treeForTests = function(name) {
//     it('returns a tree with only the initializer in production environment by default', function() {
//       process.env.EMBER_ENV = 'production';
//       var addonTree = getMirageAddon().treeFor(name);
//
//       expect(addonTree.files.length).to.equal(1);
//       expect(addonTree.files[0]).to.equal('initializers/ember-cli-mirage.js');
//     });
//
//     ['development', 'test'].forEach(function(environment) {
//       it('returns a tree in ' + environment + ' environment by default', function() {
//         process.env.EMBER_ENV = environment;
//         var addonTree = getMirageAddon().treeFor(name);
//
//         expect(addonTree._inputNodes.length).to.not.equal(0);
//       });
//     });
//
//     it('returns a tree in production environment when enabled is specified', function() {
//       process.env.EMBER_ENV = 'production';
//       var addon = getMirageAddon({ configPath: 'tests/fixtures/config/environment-production-enabled' });
//       var addonTree = addon.treeFor(name);
//
//       expect(addonTree._inputNodes.length).to.not.equal(0);
//     });
//   };
//
//   describe('#treeFor addon', function() {
//     treeForTests('addon');
//   });
//
//   describe('#treeFor app', function() {
//     treeForTests('app');
//   });
//
// });
