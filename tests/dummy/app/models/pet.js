import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  alive: DS.attr('boolean'),
  animal: DS.attr('string')
});
