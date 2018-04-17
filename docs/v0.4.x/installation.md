---
title: Installation
version: v0.4.x
---

To install Mirage, run

```
ember install ember-cli-mirage
```

Ember should install the addon and add a `/mirage` directory to the root of your project.

Check out the [upgrade guide](../upgrading) if you're coming from Mirage 0.2.x.

> NOTE: If you have upgraded to Ember 3.x, any newly generated application/acceptance
> test will need the code below to function properly.

```javascript
import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';  // <-- New

module('Acceptance | mirage', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks); // <-- New

  test('server exists', async function(assert) {
    assert.ok(server);
  });
});
```
