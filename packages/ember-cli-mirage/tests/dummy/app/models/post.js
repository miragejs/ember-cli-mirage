import Model, { attr, hasMany } from '@ember-data/model';
import yaml from 'js-yaml';

export default class Post extends Model {
  @hasMany() comments;

  @attr title;
  @attr body;
  @attr issueUrl;

  get meta() {
    let lines = this.body.split('\n').map((line) => line.trim());
    let firstLine = lines[0];

    if (firstLine === '<!--') {
      let lastIndex = lines.indexOf('-->');
      let metaLines = lines.slice(1, lastIndex);
      let meta = yaml.safeLoad(`${metaLines.join('\n')}`);

      return meta;
    } else {
      return {};
    }
  }

  get slugAndId() {
    return `${this.meta.slug}-${this.id}`;
  }
}
