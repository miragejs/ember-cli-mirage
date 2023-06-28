import config from 'basic-app/config/environment';

import { setupMirage } from 'ember-cli-mirage';
import makeServer from 'basic-app/mirage/config';

export default {
  name: 'setup-mirage',
  initialize(application) {
    setupMirage(config, makeServer, application);
  },
};
