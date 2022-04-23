import Model, { attr } from '@ember-data/model';

export default class User extends Model {
  @attr avatarUrl;
  @attr profileUrl;
  @attr username;
}
