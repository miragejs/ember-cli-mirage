import { deprecate } from '@ember/debug';
import { importSync, isTesting, dependencySatisfies } from '@embroider/macros';
import * as mirage from 'miragejs';
import * as ecMirageExports from './index';

const nonDeprecatedImports = ['default'];

/**
 @function initDeprecatedReExports
 @hide
 */
export function initDeprecatedReExports() {
  Object.entries(mirage).forEach(([name, value]) => {
    if (!nonDeprecatedImports.includes(name)) {
      // eslint-disable-next-line no-import-assign
      Object.defineProperty(ecMirageExports, name, {
        get() {
          if (isTesting() && dependencySatisfies('ember-qunit', '*')) {
            const { waitUntil, getContext } = importSync('@ember/test-helpers');

            window.QUnit.begin(function () {
              // Make sure deprecation message does not get "swallowed"
              // when tests run due to
              // https://github.com/emberjs/ember-test-helpers/blob/master/addon-test-support/%40ember/test-helpers/setup-context.ts#L41
              waitUntil(() => getContext() !== undefined).then(() =>
                _deprecate(name)
              );
            });
          } else {
            _deprecate(name);
          }

          return value;
        },

        enumerable: true,
      });
    }
  });
}

function _deprecate(name) {
  const message =
    `Importing '${name}' from 'ember-cli-mirage' is deprecated.` +
    ` Install the \`miragejs\` package and use ` +
    `\`import { ${name} } from 'miragejs';\` instead.`;

  deprecate(message, false, {
    id: 'ember-cli-mirage.miragejs.import',
    until: '3.0.0',
    for: 'ember-cli-mirage',
    since: {
      enabled: '2.3.0',
    },
  });
}
