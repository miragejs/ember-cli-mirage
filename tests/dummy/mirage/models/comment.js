import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  blogPost: belongsTo(),
  parentComment: belongsTo('comment'),
  childComments: hasMany('comment', {
    inverse: 'parentComment',
    foreignKey: 'parentCommentId'
  })
});
