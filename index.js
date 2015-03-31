'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-mirage',

  included: function included(app) {
    this.app = app;

    if (this.shouldIncludeFiles()) {
      app.import(app.bowerDirectory + '/FakeXMLHttpRequest/fake_xml_http_request.js');
      app.import(app.bowerDirectory + '/route-recognizer/dist/route-recognizer.js');
      app.import(app.bowerDirectory + '/pretender/pretender.js');
      app.import('vendor/ember-cli-mirage/shim.js', {
        type: 'vendor',
        exports: { 'pretender': ['default'] }
      });
      app.import(app.bowerDirectory + '/ember-inflector/ember-inflector.js');
    }
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  treeFor: function(name) {
    if (this.shouldIncludeFiles()) {
      return this._super.treeFor.apply(this, arguments);
    }
    this._requireBuildPackages();
    return this.mergeTrees([]);
  },

  shouldIncludeFiles: function() {
    var config = this.app.project.config()['ember-cli-mirage'];

    return !config.disable && (config.force || (this.app.env !== 'production')) 
  },

  postprocessTree: function(type, tree) {
    if(type === 'js' && !this.shouldIncludeFiles()) {
      return this.excludePretenderDir(tree);
    }
    return tree;
  },

  excludePretenderDir: function(tree) {
    var modulePrefix = this.app.project.config()['modulePrefix'];
    return new this.Funnel(tree, {
      exclude: [new RegExp('^' + modulePrefix + '/mirage/')],
      description: 'Funnel: exclude mirage'
    });
  }

};
