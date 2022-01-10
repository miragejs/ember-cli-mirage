import { deprecate } from '@ember/debug';

/**
 @function getMessage
 @hide
 */
export function getMessage(importName) {
  return (
    `Importing '${importName}' from 'ember-cli-mirage' is deprecated. ` +
    `Install the \`miragejs\` package and use ` +
    `\`import { ${importName} } from 'miragejs';\` instead.`
  );
}

/**
 @function deprecateImport
 @hide
 */
export function deprecateImport(importName) {
  deprecate(getMessage(importName), false, {
    id: 'ember-cli-mirage.miragejs.import',
    until: '3.0.0',
    for: 'ember-cli-mirage',
    since: {
      enabled: '2.3.0',
    },
  });
}

/**
 @function deprecateNestedImport
 @hide
 */
export function deprecateNestedImport(message) {
  deprecate(message, false, {
    id: 'ember-cli-mirage.miragejs.import',
    until: '3.0.0',
    for: 'ember-cli-mirage',
    since: {
      enabled: '2.3.0',
    },
  });
}
