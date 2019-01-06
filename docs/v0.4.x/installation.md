---
title: Installation
version: v0.4.x
---

To install Mirage, run

```
ember install ember-cli-mirage
```

Ember should run Mirage's default generator during install, which will add a `/mirage` directory to the root of your project. If it doesn't you can always re-run the generator with

```
ember g ember-cli-mirage
```

Check out the [upgrade guide](../upgrading) if you're upgrading Mirage versions.

**Note for Prettier users**

There's an Ember CLI bug that exposes itself when using Prettier + Mirage. A longer-term fix is in the works, but for now, if you're using Prettier and install Mirage, you can either

- pin `eslint-plugin-prettier` to 2.6.0, or
- add the following to `.eslintignore`:

    ```
    /mirage/mirage
    ```
