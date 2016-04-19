// import _isArray from 'lodash/lang/isArray';
// import Collection from '../orm/collection';

export default class FunctionRouteHandler {

  constructor(schema, serializerOrRegistry, userFunction) {
    this.schema = schema;
    this.serializerOrRegistry = serializerOrRegistry;
    this.userFunction = userFunction;
  }

  handle(request) {
    return this.userFunction(this.schema, request);
  }

  setRequest(request) {
    this.request = request;
  }

  serialize(response, serializerType) {
    // if (serializerType && _isArray(response)) {
    //   response = new Collection(serializerType, response);
    // }
    //
    let serializer;
    if (serializerType) {
      serializer = this.serializerOrRegistry.serializerFor(serializerType, { explicit: true });
    } else {
      serializer = this.serializerOrRegistry;
    }

    return serializer.serialize(response, this.request);
  }

}
