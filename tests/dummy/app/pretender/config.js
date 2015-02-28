export default function() {
  // Contacts
  this.get('/contacts');
  this.get('/contacts/:id');
  this.post('/contacts');
  this.put('/contacts/:id');
  this.del('/contacts/:id');

  // Friends
  this.get('/friends');

  // Staff members (multi-word models)
  this.get('/staff_members', 'staff-members');
  this.post('/staff_members', 'staff-member');
  this.get('/staff_members/:id', 'staff-member');
  this.del('/staff_members/:id', 'staff-member');
  this.put('/staff_members/:id', 'staff-member');
}
