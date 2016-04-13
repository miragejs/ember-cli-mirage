---
title: Upgrading
version: v0.2.0-beta.7
---

## Updating your version of Mirage

To install a new version of Mirage, run

```sh
npm install ember-cli-mirage@X.X.X --save-dev
ember g ember-cli-mirage
```

The `ember g ember-cli-mirage` command ensures all of Mirage's Bower dependencies are added to your project. It runs during `ember install`, and it's always a good idea to run it when upgrading.

Use `ember-cli-mirage@beta` to get the latest beta.

## Changelog

You can view Mirage's full Changelog here:

[https://github.com/samselikoff/ember-cli-mirage/blob/master/CHANGELOG.md](https://github.com/samselikoff/ember-cli-mirage/blob/master/CHANGELOG.md)

## 0.1.x > 0.2 Upgrade guide

If you're upgrading your Mirage server from v0.1.x to v0.2 (currently in Beta), here's what you need to know:

  - **The default Mirage directory has changed.** The default Mirage directory has moved from `/app/mirage` to `/mirage`. When you install 0.2.0, the default blueprint will add the `/mirage` directory to your project. You can delete it and move your current Mirage files to the new location with something like

    ```sh
    rm -rf mirage
    mv app/mirage mirage
    ```

    from the root of your project. Mirage's directory is also [customizable](http://localhost:4000/docs/v0.2.0-beta.7/configuration/#directory), so you can also set an option and leave it under `/app`, if you'd like.

  - **All multiword filenames are dasherized.** In Mirage 0.1.x, database collection names were taken from filenames. The idea was, if your API returned snake_case collection keys (e.g. `blog_posts: []`), just name your file `fixtures/blog_posts.js`. This approach turned out to be insufficiently flexib-- what am I saying, it was just a bad idea :P.

    In Mirage 0.2.x, we follow Ember CLI's conventions of dasherized filenames. So, you'll just need to go through and change

    ```sh
    /mirage/factories/blog_post.js
    /mirage/fixtures/blog_post.js
    # etc.
    ```

    to

    ```sh
    /mirage/factories/blog-post.js
    /mirage/fixtures/blog-post.js
    ```

    You will then use the [new Serializer layer](../serializers) to do things like format keys in your json payloads (or Mirage will do it for you).

  - **All JavaScript properties are camelCased.** Similar to the previous change, factory properties and database collection names followed the format of your API in Mirage 0.1.x. If you were faking an ActiveModelSerializer backend, multiword keys used snake_case throughout your Mirage code. So, your database table might be `db.blog_posts`, and your factory keys might be `first_name() {..}`. Looks pretty cool right?

    Wrong. We're JavaScript developers here, people. It's time to start using camelCase.

    You'll need to update your route handlers, which may look like this:

    ```js
    let posts = db.blog_posts.filter(p => p.author_id === 1);
    ```

    to

    ```js
    let posts = db.blogPosts.filter(p => p.authorId === 1);
    ```

    Note that everything is camelCased, including foreign keys.

    Similarly, factories that look like

    ```js
    export default Factory.extend({
      first_name() {
        return faker.name.firstName();
      },

      last_name() {
        return faker.name.firstName();
      },
    });
    ```

    should be changed to

    ```js
    export default Factory.extend({
      firstName() {
        return faker.name.firstName();
      },

      lastName() {
        return faker.name.firstName();
      },
    });
    ```

    This goes for all attrs that `server.create` takes (and returns), etc. For many this will be the most painful part of the upgrade. Please find it in your heart to forgive me.

  - **Mirage now has its own Model layer (an ORM).** In Mirage 0.1.x, you had to define either a factory or a fixture file (or both) in order for a database collection to be created, which let you take advantage of the db in your route handlers. In 0.2, we've introduced Mirage Models, which serve as the new canonical source of truth about your database.

    To create a model, use

    ```
    ember g mirage-model blog-post
    ```

    This will create a file like

    ```js
    import { Model } from 'ember-cli-mirage';

    export default Model.etend({

    });
    ```

    Having that file sets up the `db.blogPosts` collection, allows you to use the JSON:API serializer, and more. You can still define factories and fixtures - but only if you need them. <!-- not yet! in 0.6.0 For instance, given the model above, `server.create('blog-post')` would create a blank `blog-post` model. You could then make a factory for models that need more customization. --> Models, factories and fixtures all work together, but now you won't be making blank factory or fixture files just to set up your database. The models themselves serve as the source of truth.

    We needed to add models for [association support](../models/#associations) (which currently exists) and factory relationships (the first feature to come after the 0.2 release). Read through the [models guide](../models) and [serializers guide](../serializers) to see how having models can simplify your Mirage server.

    We also have a plan to make a separate addon that could ascertain your model definitions and their relationships from your Ember Data models. Adding the ORM paves the way for this important future addition.

    Currently, Mirage will still work if a factory/fixture file is defined for a particular db collection without a corresponding model. Eventually, we may require all setups to have model definitions for each collection. But for now, to make for an easier upgrade path, you can start generating models and opt-in to the ORM layer in piecemeal.

---

You can always view the [full changelog](https://github.com/samselikoff/ember-cli-mirage/blob/master/CHANGELOG.md) to see everything that's changed in 0.2.x. If you think this guide missed a critical part of the upgrade path, please [help improve it](https://github.com/samselikoff/ember-cli-mirage/edit/gh-pages/docs/v0.2.0-beta.7/upgrading.md)!
