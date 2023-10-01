import ApplicationSerizlizer from '../application';

export default ApplicationSerizlizer.extend({
  keyForAttribute(attr) {
    const key = ApplicationSerizlizer.prototype.keyForAttribute.call(
      this,
      attr,
    );

    return `nested_thing_${key}`;
  },
});
