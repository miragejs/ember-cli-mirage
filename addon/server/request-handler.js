import RouteRecognizer from 'route-recognizer';

export default class RequestHandler {

  constructor(server) {
    this.server = server;
    this.routers = {
      get: new RouteRecognizer(),
      post: new RouteRecognizer(),
      put: new RouteRecognizer(),
      patch: new RouteRecognizer(),
      del: new RouteRecognizer(),
      options: new RouteRecognizer()
    };
    this.routers.delete = this.routers.del;
  }

  register(verb, path, handler) {
    this.routers[verb].add([{ path, handler }]);
  }

  get helpers() {
    return {
      get: this.handle.bind(this, 'get'),
      post: this.handle.bind(this, 'post'),
      put: this.handle.bind(this, 'put'),
      patch: this.handle.bind(this, 'patch'),
      del: this.handle.bind(this, 'del'),
      delete: this.handle.bind(this, 'del'),
      options: this.handle.bind(this, 'options')
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
