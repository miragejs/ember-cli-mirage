import RouteRecognizer from 'route-recognizer';

export default class RequestHandler {

  constructor(server) {
    this.server = server;
    this.routers = {
      get: new RouteRecognizer()
    };
  }

  register(verb, path, handler) {
    this.routers[verb].add([{ path, handler }]);
  }

  get helpers() {
    return {
      get: this.handle.bind(this, 'get')
    };
  }

  async handle(verb, url) {
    let request = {
      url,
      method: verb.toUpperCase(),
      params: {},
      queryParams: {},
      requestBody: {},
      requestHeaders: {},
      async: true
    };

    let recognizedRoutes = this.routers[verb].recognize(url);
    if (recognizedRoutes) {
      let handler = recognizedRoutes[0].handler;

      return await handler(request);
    }
  }

}
