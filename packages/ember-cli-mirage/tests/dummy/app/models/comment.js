import Model, { attr, belongsTo } from '@ember-data/model';

export default class Comment extends Model {
  @belongsTo('user', { async: false }) user;

  @attr body;
  @attr permalink;
  @attr createdAt;
}
