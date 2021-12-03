import { deprecate } from '@ember/debug';
import * as ecMirageExports from './index';
import * as mirage from 'miragejs';

const nonDeprecatedImports = ['default'];

export function initDeprecatedImports () {
  Object.entries(mirage).forEach(([name, value]) => {
    if (!nonDeprecatedImports.includes(name)) {
      // eslint-disable-next-line no-import-assign
      Object.defineProperty(ecMirageExports, name, {
        get () {
          const message = `Importing '${name}' from 'ember-cli-mirage' is deprecated.` +
            ` Install the \`miragejs\` package and use ` +
            `\`import { ${name} } from 'miragejs';\` instead.`;

          deprecate(message, false, {
            id: 'ember-cli-mirage.miragejs.import',
            until: '3.0.0',
            for: 'ember-cli-mirage',
            since: {
              enabled: '2.3.0',
            }
          });

          return value;
        },

        enumerable: true,
      });
    }
  });
}
