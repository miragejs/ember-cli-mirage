import Model, { belongsTo } from '@ember-data/model';

export default class Book extends Model {
  @belongsTo('user', { async: false, inverse: 'books' }) user;
}
