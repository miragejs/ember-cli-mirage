---
title: Installing and Updating
version: v0.2.0-beta.1

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

If you're upgrading to beta from `0.1.x`, the `/mirage` directory has moved from `/app/mirage` to `/mirage`. After installing, a new `/mirage` directory will be generated. Delete it, and move your old directory to the new location.

From the root of your project,

```sh
rm -rf mirage
mv app/mirage mirage
```
