'use strict';

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    this.insertIntoFile('.jshintrc', '    "server",', {
      after: '"predef": [\n'
    });

    this.insertIntoFile('tests/.jshintrc', '    "server",', {
      after: '"predef": [\n'
    });

    return this.addBowerPackagesToProject([
      {name: 'pretender', target: '3cd6878d53d160b4ae4c9406bb523229fe14d467'},
      {name: 'ember-inflector', target: '~1.3.1'},
      {name: 'lodash', target: '~3.7.0'},
      {name: 'Faker', target: '~2.1.3'}
    ]);
  }
};
