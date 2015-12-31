---
title: Installing and Updating
version: v0.2.x

redirect_from: "/docs/latest/installation/"
---

## Installing

For Ember CLI >= 0.2.3,

```
ember install ember-cli-mirage
```

For Ember CLI < 0.2.3,

```
ember install:addon ember-cli-mirage
```

## Updating

Update the `package.json` entry to the version you want, then run

```sh
npm install
ember g ember-cli-mirage
```

## Troubleshooting

Problems with installing or updating Mirage are usually solved by running

```sh
ember g ember-cli-mirage
```

This ensures all of Mirage's Bower dependencies are added to your project. It's supposed to run during `ember install`, but this functionality is broken in some versions of Ember CLI.

## Installing beta

To use beta, run

```sh
ember install ember-cli-mirage@v0.2.0-beta.1
```

### Updating to beta

If your app uses `0.1.x` and you want to upgrade to `0.2.x`, run

```sh
rm -fr mirage
mv app/mirage mirage
```
