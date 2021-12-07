import { deprecate } from '@ember/debug';

export function getMessage (importName) {
  return `Importing '${importName}' from 'ember-cli-mirage' is deprecated. ` +
  `Install the \`miragejs\` package and use ` +
  `\`import { ${importName} } from 'miragejs';\` instead.`;
}

export function deprecateImport (importName) {
  deprecate(getMessage(importName), false, {
    id: 'ember-cli-mirage.miragejs.import',
    until: '3.0.0',
    for: 'ember-cli-mirage',
    since: {
      enabled: '2.3.0',
    }
  });
}

export function deprecateNestedImport (message) {
  deprecate(message, false, {
    id: 'ember-cli-mirage.miragejs.import',
    until: '3.0.0',
    for: 'ember-cli-mirage',
    since: {
      enabled: '2.3.0',
    }
  });
}
