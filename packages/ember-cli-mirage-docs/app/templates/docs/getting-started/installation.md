# Installation

To install Mirage, run

```
ember install ember-cli-mirage
```

Ember should install the addon and add a `/mirage` directory to the root of your project. 
Ember-cli-mirage depends on [MirageJS](https://miragejs.com/) as a peer dependency and will add it to your applications `package.json`.  

Check out the <DocsLink @route="docs.getting-started.upgrade-guide">upgrade guide</DocsLink> if you're coming from a previous version of Mirage.

## Note for Embroider users

Embroider does not recognizes changes to Ember CLI Mirage configuration in `mirage/` folder by default. To support livereload for the Ember CLI Mirage configuration, the addon must be listed explicitly in `EMBROIDER_REBUILD_ADDONS` environment variable. If you are working on Mirage configuration, you should start the Ember development server like the following:

```sh
EMBROIDER_REBUILD_ADDONS=ember-cli-mirage ember s
```

## Note for Prettier users

There's an Ember CLI bug that exposes itself when using Prettier + Mirage. A longer-term fix is in the works, but for now, if you're using Prettier and install Mirage, you can either

- pin `eslint-plugin-prettier` to 2.6.0, or
- add the following to `.eslintignore`:

  ```sh
  /mirage/mirage
  ```

## Note for FastBoot users

You might expect Mirage to serve network requests made by your FastBoot app, but because Mirage runs only in the browser, it currently disables itself if your app is being served by FastBoot.

[FastBoot support](https://github.com/miragejs/ember-cli-mirage/issues/1411) is a highly requested feature we are working on. In the meantime, you'll need to develop your FastBoot pages against a local server.

You can always bypass FastBoot page generation locally by running

```sh
FASTBOOT_DISABLED=true ember serve
```

Mirage will then run in the browser as expected, and you can develop your client app as normal.
