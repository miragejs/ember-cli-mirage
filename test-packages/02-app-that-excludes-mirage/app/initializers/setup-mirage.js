import config from 'app-that-excludes-mirage/config/environment';

import { setupMirage } from 'ember-cli-mirage';
import makeServer from 'app-that-excludes-mirage/mirage/config';

export default {
  name: 'setup-mirage',
  initialize(application) {
    setupMirage(config, makeServer, application);
  },
};
