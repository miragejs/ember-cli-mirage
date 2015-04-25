export default function() {
  // Contacts
  this.get('/contacts');
  this.get('/contacts/:id');
  this.post('/contacts');
  this.put('/contacts/:id');
  this.del('/contacts/:id');

  // Friends
  this.get('/friends');

  // Uploads
  this.post('/uploads', (db, request) => {
    this.simulateUpload(request, { interval: 60 });
    return { filename: 'thriller.mp3' };
  });
}
