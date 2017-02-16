class ExpressRouteHandler {
  constructor(router) {
    this.router = router;
    this.passthrough = {};
  }
  handle(type, path, promise) {
    if (promise === this.passthrough) {
      this.router[type](path, (req, res, next) => {
        next();
      });
    } else {
      this.router[type](path,
        (req, res) => {
          promise(req).then((responseArray) => {
            let [ code, headers, response ] = responseArray;
            let allowAccessFromOnceFastbootLoadedJS = { 'Access-Control-Allow-Origin': '*' };
            res.status(code).set(allowAccessFromOnceFastbootLoadedJS).set(headers).send(response);
          });
        });
    }
  }
  get(path, promise) {
    this.handle('get', path, promise);
  }
  post(path, promise) {
    this.handle('post', path, promise);
  }
  put(path, promise) {
    this.handle('put', path, promise);
  }
  delete(path, promise) {
    this.handle('delete', path, promise);
  }
  patch(path, promise) {
    this.handle('patch', path, promise);
  }
  shutdown() {}
}

/**
 * Creates a new Express Interceptro handling requests throught and express router.
 *
 * @method createExpressInterceptor
 * @param {Server} server
 * @return {Object} Express router to install routes to
 * @public
 */
function createExpressInterceptor(server, router) {
  return new ExpressRouteHandler(router);
}

export default createExpressInterceptor;
