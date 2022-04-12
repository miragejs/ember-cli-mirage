import Model, { attr, belongsTo } from '@ember-data/model';
import compileMarkdown from 'ember-cli-addon-docs/utils/compile-markdown';
import { htmlSafe } from '@ember/template';

export default class Comment extends Model {
  @belongsTo() user;

  @attr body;
  @attr permalink;
  @attr createdAt;

  get htmlBody() {
    return htmlSafe(compileMarkdown(this.body));
  }
}
