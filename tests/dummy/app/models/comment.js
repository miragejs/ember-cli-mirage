import DS from 'ember-data';

export default DS.Model.extend({

  content: DS.attr(),

  childComments: DS.hasMany('comment', {
    inverse: 'parentComment',
    async: false
  }),
  parentComment: DS.belongsTo('comment', {
    async: false
  })
});
