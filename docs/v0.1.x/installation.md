---
title: Installation
version: v0.1.x

redirect_from: "/docs/latest/installation/"
---

For Ember CLI >= 0.2.3,

```
ember install ember-cli-mirage
```

For Ember CLI < 0.2.3,

```
ember install:addon ember-cli-mirage
```

## Bower

If something seems wrong after you've installed Mirage, try running

```
ember generate ember-cli-mirage
```

This ensures all of Mirage's Bower dependencies are added to your project. It's supposed to run during `ember install`, but this functionality is broken in some versions of Ember CLI.

## Other notes

If you are using a version of PhantomJS before 2.0, ensure you have [ember-cli-es5-shim](https://github.com/pixelhandler/ember-cli-es5-shim) installed in your app because Mirage uses `.bind`.
