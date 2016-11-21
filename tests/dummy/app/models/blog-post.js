import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr(),

  comments: DS.hasMany(),
  wordSmith: DS.belongsTo(),

  parentComments: Ember.computed.filterBy('comments', 'parentComment', null)
});
