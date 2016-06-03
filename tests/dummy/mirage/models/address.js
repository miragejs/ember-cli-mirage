import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  contactAddresses: hasMany(),
  contacts: hasMany()
});
