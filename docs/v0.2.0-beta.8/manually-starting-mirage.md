---
title: Manually starting Mirage
version: v0.2.0-beta.8
---

Currently, Mirage's server boots up in an Ember initializer. This means it will not automatically start in unit or integration tests, since there's no Ember app running.

Eventually we'll extract Mirage's initializer, but for now you can use this workaround. To run your Mirage server during a unit or integration test, first create a helper:

```js
// tests/helpers/setup-mirage-for-integration.js
import mirageInitializer from '../../initializers/ember-cli-mirage';

export default function startMirage(container) {
  mirageInitializer.initialize(container);
}
```

Then, add the following to any test where you want Mirage to initialize:

```js
// tests/integration/components/your-test.js
import startMirage from '../../../helpers/setup-mirage-for-integration';

moduleForComponent('your-component', 'Integration | Component | your component', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});
```
