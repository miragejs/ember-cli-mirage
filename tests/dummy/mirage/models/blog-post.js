import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({

  wordSmith: belongsTo(),
  comments: hasMany()

});
