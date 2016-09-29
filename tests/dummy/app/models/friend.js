import DS from 'ember-data';
import Contact from './contact';

export default Contact.extend({
  isYoung: DS.attr('boolean')
});
