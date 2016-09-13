import DS from 'ember-data';

export default DS.Model.extend({
  street: DS.attr('string'),
  town: DS.belongsTo('address/town'),
  contact: DS.belongsTo('contact')
});
