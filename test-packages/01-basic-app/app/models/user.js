import Model, { attr, hasMany } from '@ember-data/model';

export default class User extends Model {
  @attr('string') name;
  @attr('number') age;
  @attr('string') email;

  @hasMany('book', { async: false, inverse: 'user' }) books;
}
