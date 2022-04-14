import setupMirage from './setup-mirage';
export { setupMirage };

import { dependencySatisfies } from '@embroider/macros';

if (dependencySatisfies('ember-qunit', '*')) {
  window.QUnit.config.urlConfig.push({
    id: 'mirageLogging',
    label: 'Mirage logging',
  });
}
