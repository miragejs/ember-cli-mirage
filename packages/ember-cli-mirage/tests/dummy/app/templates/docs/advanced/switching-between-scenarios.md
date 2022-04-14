# Switching between scenarios

Mirage adds a `/scenarios` directory to your project, where you'll find a `default.js` file.
The function in this file will run in development mode and act as your "development seeds".
In testing it's ignored, so that your Mirage server starts out with a clean database. You
can then use each test to seed Mirage as needed for that test. In this way, each test acts
as its own Mirage scenario.

Originally Mirage was going to add first-class support for development-time scenario switching,
but currently only the `scenarios/default.js` file is used by Mirage. However, you can use various
strategies to configure the behavior of your default scenario, to support multiple development
server states or to facilitate things like running [user acceptance testing](https://en.wikipedia.org/wiki/Acceptance_testing#User_acceptance_testing).
For example, you might want to test whether a user can complete a set of tasks specific to unique circumstances defined in a scenario.

One strategy you could take is to configure your default scenario file to honor options passed
to the runtime environment. For example, say you wanted to be able to run a scenario file like this:

```bash
MIRAGE_SCENARIO=some-scenario ember s
```

To affect the behavior of `scenarios/default.js`, add the `MIRAGE_SCENARIO` ENV variable to your `environment/config.js`:

```js
const { MIRAGE_SCENARIO } = process.env;

module.exports = function(environment) {
  const ENV = {
    // ...other stuff

    MIRAGE_SCENARIO,

    // ...other stuff
  };

  return ENV;
}
```

Then access this new config variable in your `scenarios/default.js` file:

```js
// scenarios/default.js
import ENV from '../../config/environment';
import visitor from './visitor';
import subscriber from './subscriber';
import administrator from './administrator';

const scenarios = {
  visitor,
  subscriber,
  administrator
}

const activeScenario = ENV.MIRAGE_SCENARIO || 'visitor';

export default function(server) {
  const scenario = scenarios[activeScenario];

  if (scenario) {
    scenario(server);
  }

  // plus whatever default scenario code you want
}
```

Like other Mirage objects, all scenario files must export a function like so:

```js
export default function(server) {
  // server.createList('post', 15);
}
```

Note that the `server` parameter is not provided by default.

