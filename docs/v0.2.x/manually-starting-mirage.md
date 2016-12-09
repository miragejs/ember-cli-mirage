---
title: Manually starting Mirage
version: v0.2.x
---

Currently, Mirage's server boots up in an Ember initializer. This means it will not automatically start in unit or integration tests, since there's no Ember app running.

Eventually we'll extract Mirage's initializer, but for now you can use this workaround. Add the following to any test where you want Mirage to initialize:

```js
// tests/integration/components/your-test.js
import { startMirage } from 'yourapp/initializers/ember-cli-mirage';

moduleForComponent('your-component', 'Integration | Component | your component', {
  integration: true,
  beforeEach() {
    this.server = startMirage();
  },
  afterEach() {
    this.server.shutdown();
  }
});
```

If you are using Mirage in an Ember addon, you'll need to change the import path to `dummy/initializers/ember-cli-mirage`.
