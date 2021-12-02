import Model, { attr, belongsTo } from '@ember-data/model';
import compileMarkdown from 'ember-cli-addon-docs/utils/compile-markdown';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';

export default class Comment extends Model {

  @belongsTo() user;

  @attr body;
  @attr permalink;
  @attr createdAt;

  @computed('body')
  get htmlBody () {
    return htmlSafe(compileMarkdown(this.body));
  }

}
