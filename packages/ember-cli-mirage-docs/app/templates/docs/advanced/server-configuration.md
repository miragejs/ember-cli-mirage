# Server configuration

The MirageJS server is configured for you by ember-cli-mirage. However, if you
need to customize the server you can by creating a makeServer function in the
config.js.

Typically, the `/mirage/config.js` file contains a single default export which
is a function defining all your Mirage route handlers. Ember CLI Mirage then
uses this function, along with all the other modules you've defined in
`mirage/models`, `mirage/fixtures`, `mirage/factories`, and
`mirage/serializers`, to create your Mirage JS server when your app boots up
in development and testing.

You can now opt in to having more control over exactly how your Mirage server
is instantiated using the same code as the mirageJS examples of creating a server 
by changing your current default export that represents the routes to a normal function,
then creating a new default export function that creates the mirageJS server.

This new default export function receives a single argument named `config`, 
which contains all the factory/fixture/serializer/model modules that exist 
in your project's `/mirage` directory. This saves you from having to import 
each module explicitly and then pass it into your Mirage server, just like 
you're used to with the default setup.

The `config` argument maps exactly to everything inside of your `/mirage`
directory - notably, it does not contain the autogenerated Mirage model
definitions derived from your Ember Data models, which is an important feature
of Ember CLI Mirage that is enabled by default. To replicate this behavior, a helper
has been provided named `discoverEmberDataModels` from the `ember-cli-mirage` 
package that you can use to augment your config with these models so that your Mirage schema is
automatically inferred from your host application's Ember Data models and
relationships. The snippet below shows how to do this. Note that the order
here matters if you also have models defined in your `/mirage/models`
directory, as those model definitions would "win" in the event of a conflict
with the ones autodiscovered from Ember Data. (However, most of time if you
are inferring your Mirage schema from Ember Data, you shouldn't need to define
additional models.)

Finally, your route handlers just need to be passed to the `routes()` key in
your Mirage config. You can do this inline, or you can make them a separate
function, and organize that function however you choose.

You should also add `miragejs` to your project's dependencies in
your `package.json` file, since you are now importing directly from it. Note
that this gives you the added benefit of being able to upgrade `miragejs`
independently of `ember-cli-mirage`. 

All the objects from `miragejs` are re-exported in `ember-cli-mirage` such as 
`Model`, `belongsTo`, `hasMany` as well as `Fixtures`, `Traits` for example. 
These should in the future also be imported directly from `miragejs` as 
eventually these re-exports will be removed. This will help align the 
`ember-cli-mirage` users with the rest of the Mirage JS community.

```javascript
// Example with inline routes
import { discoverEmberDataModels } from "ember-cli-mirage";
import { createServer } from 'miragejs';

export default function(config) {
  let finalConfig = {
    ...config,
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models
    },
    routes() {
      // this.namespace = '/api'

      // this.resource('user')
    },
  };

  return createServer(finalConfig);
}

// Example with routes in an external function
import { discoverEmberDataModels } from "ember-cli-mirage";
import { createServer } from 'miragejs';

export default function(config) {
  let finalConfig = {
    ...config,
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models
    },
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  // this.namespace = '/api'

  // this.resource('user')
}
```

## Serializers

If you would like to have Mirage adjust or create your serializers for you from your ember data serializers adjust your 
server configuration to have mirage perform this for you.

When Mirage auto discovers your ember data models, should you also have the same model defined in mirage, it will use the mirage
version of the model. With serializers, you may have created a mirage serializer to override some methods, but would still 
like Mirage to apply the primaryKey and transforms. For that reason the method to apply these properties is different than
the way you merge the models.

`applyEmberDataSerializers` will apply the `primaryKey` and `attrs` from your ember data serializers to your mirage serializers.
If you have not created a mirage serializer it will create one and extend it from your mirage application serializer.
Ensure your application serializer extends from EmberDataSerializer as the default JSONApiSerializer will not understand 
how to use `primaryKey` and `transforms`. If you have not created a mirage serializer named application, the created serializer 
will extend EmberDataSerializer directly.

```javascript
// Example of having Mirage adjust/create your serializers similiar to ember data models

import { discoverEmberDataModels, applyEmberDataSerializers } from "ember-cli-mirage";
import { createServer } from 'miragejs';

export default function(config) {
  let finalConfig = {
    ...config,
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models
    },
    serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  // this.namespace = '/api'

  // this.resource('user')
}
```
