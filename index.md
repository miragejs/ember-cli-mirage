---
layout: default
title: Home
---

## What is Mirage?

Are you tired of

- Writing one set of mocks for your tests, and another for development?
- Wiring up tests for each of your apps manually, from scratch?
- Changing lots of files/tests when your API changes?

Ember CLI Mirage may be for you! It lets you create a client-side server using Pretender to help you develop and test your app. By default, it only runs if you're not in production and if you're not proxying to an explicit API server via ember serve --proxy.

## Installation

For Ember CLI >= `0.2.3`

```
ember install ember-cli-mirage
```

For Ember CLI < `0.2.3`

```
ember install:addon ember-cli-mirage
```

Also, be sure to add `server` to the `predef` section in your `tests/.jshintrc` file.

## Updating

This project is new and the API is subject to change. When updating your project to a newer version of Ember CLI Mirage, please consult [the changelog](https://github.com/samselikoff/ember-cli-mirage/blob/master/CHANGELOG.md) for any update notes.
