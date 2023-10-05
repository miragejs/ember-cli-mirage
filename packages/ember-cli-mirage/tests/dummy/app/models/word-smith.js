import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class extends Model {
  @attr name;
  @attr age;
  @hasMany('comment', { async: false, inverse: null }) comments;
  @belongsTo('address', { async: false, inverse: null }) address;
}
