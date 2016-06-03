import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  contact: belongsTo(),
  address: belongsTo()
});
