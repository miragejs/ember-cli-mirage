import setupMirage from './setup-mirage';
export { setupMirage };

if (typeof window.QUnit !== 'undefined') {
  window.QUnit.config.urlConfig.push({
    id: 'mirageLogging',
    label: 'Mirage logging',
  });
}
