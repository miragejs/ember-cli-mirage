(function() {
  if (typeof QUnit !== 'undefined') {
    QUnit.config.urlConfig.push({
      id: 'mirageLogging',
      label: 'Mirage logging',
    });
  }
})();
