import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({

  'blog/posts': hasMany()

});
