# setupMirage test helper

In your tests (acceptance, integration and unit) you can import the `setupMirage` test helper to start the Mirage server. Passing the hooks from the test module allows the mirage server to be created and shutdown before and after each test.

```js
  import { setupApplicationTest } from 'ember-qunit';
  import { setupMirage } from 'ember-cli-mirage/test-support';

  module('Acceptance | Homepage test', function(hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    test('my first test', async function(assert) {
      // test code
    });
  });
```

The second parameter (optional) allows defining the mirage server to be used for this set of tests.
```js
  import { setupApplicationTest } from 'ember-qunit';
  import { setupMirage } from 'ember-cli-mirage/test-support';
  import makeServer from 'app-name/mirage/config';   // replace app-name with your app name

  module('Acceptance | Homepage test', function(hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks, { makeServer });

    test('my first test', async function(assert) {
      // test code
    });
  });
```

If it is not desirable to use the default config from the mirage directory you could import any other file that implements the same function, or even define the function locally or inline
```js
  import { setupApplicationTest } from 'ember-qunit';
  import { setupMirage } from 'ember-cli-mirage/test-support';
  import { discoverEmberDataModels } from 'ember-cli-mirage';
  import { createServer } from 'miragejs';

  const makeServer = function(config) {
    let finalConfig = {
      ...config,
      models: { ...discoverEmberDataModels(), ...config.models },
      routes() {
        this.namespace = "api"
        this.timing = 2000

        this.get("/movies", () => {
          return ["Interstellar", "Inception", "Dunkirk"]
        })
      }
    };

    return createServer(finalConfig);
  }

module('Acceptance | Homepage test', function(hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks, { makeServer });

    test('my first test', async function(assert) {
      // test code
    });
  });
```

