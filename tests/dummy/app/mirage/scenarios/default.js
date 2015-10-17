export default function(server) {
  let joe = server.create('contact', {name: 'Joe'});
  server.create('address', {name: '123 Hyrule Way', contact_id: joe.id});

  let bob = server.create('contact', {name: 'Bob'});
  server.create('address', {name: 'Mount Doom', contact_id: bob.id});
  server.create('contact', {name: 'Susan'});

  server.create('friend', {name: 'Joe', age: 10, is_young: true});
  server.create('friend', {name: 'Bob', age: 80, is_young: false});

  server.createList('dog', 4, {}, { as: 'pet' });
  server.create('dog', { name: 'Sauron' }, { as: 'pet' });
}
