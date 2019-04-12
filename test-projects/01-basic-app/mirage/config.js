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

  this.get('node-endpoint-with-generic-error-object', (schema) => {
    throw new Error('Whoops!');
  });

  this.get('node-endpoint-with-other-error', (schema) => {
    throw 'you goofed';
  });

  this.get('node-endpoint-models', (schema) => {
    return schema.tickets.all();
  });
}
