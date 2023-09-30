import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class extends Model {
  @attr name;
  @attr age;
  @hasMany('comments') comments;
  @belongsTo('address', { async: false }) address;
}
