import Schema from 'ember-cli-mirage/orm/schema';
import Model from 'ember-cli-mirage/orm/model';
import Db from 'ember-cli-mirage/db';
import { hasMany, belongsTo } from 'ember-cli-mirage';

export default {

  setup() {
    return new Schema(new Db(), {
      wordSmith: Model.extend({
        blogPosts: hasMany()
      }),
      blogPost: Model.extend({
        wordSmith: belongsTo(),
        fineComments: hasMany()
      }),
      fineComment: Model.extend({
        blogPost: belongsTo()
      }),
      greatPhoto: Model,

      foo: Model.extend({
        bar: belongsTo()
      }),
      bar: Model.extend({
        baz: belongsTo()
      }),
      baz: Model.extend({
        quuxes: hasMany()
      }),
      quux: Model.extend({
        zomgs: hasMany()
      }),
      zomg: Model.extend({
        lol: belongsTo()
      }),
      lol: Model
    });
  }

};
