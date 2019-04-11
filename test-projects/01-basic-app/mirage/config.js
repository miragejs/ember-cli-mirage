export default function() {
  if (this.environment === 'browser') {
    this.resource('user');
  }

  // if (this.environment === 'node') {
  this.get('node-endpoint', () => {
    return {
      message: 'poop-node'
    };
  });
  // }

}
