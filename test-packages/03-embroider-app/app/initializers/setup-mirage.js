import config from 'embroider-app/config/environment';

import { setupMirage } from 'ember-cli-mirage';
import makeServer from 'embroider-app/mirage/config';

export default {
  name: 'setup-mirage',
  initialize(application) {
    setupMirage(config, makeServer, application);
  },
};
