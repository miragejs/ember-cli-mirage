import Model, {attr, belongsTo, hasMany} from '@ember-data/model';

export default Model.extend({
  name: attr(),
  age: attr(),
  comments: hasMany('comments'),
  address: belongsTo('address')
});
