export default function() {
  this.resource('user');

  this.get('node-endpoint', () => {
    return {
      message: 'hello-node'
    };
  });

  this.get('node-endpoint-with-mirage-error', (schema) => {
    // this will throw a MirageError
    schema.modelClassFor('foo');
  });

  this.get('node-endpoint-with-generic-error', (schema) => {
    throw 'you goofed';
  });
}
