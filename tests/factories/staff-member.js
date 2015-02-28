import EP from 'ember-pretenderify';

export default EP.Factory.extend({
  name: 'Pete',
  age: 20,

  email: function(i) {
    return `staff-member${i}@test.com`;
  }
});
