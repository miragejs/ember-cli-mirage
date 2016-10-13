import { toCollectionName } from 'ember-cli-mirage/utils/normalize-name';
import BaseRouteHandler from '../base';
import PagedPaginator from 'ember-cli-mirage/utils/paged-paginator';

export default class BaseShorthandRouteHandler extends BaseRouteHandler {

  constructor(schema, serializerOrRegistry, shorthand, path, options={}) {
    super();
    shorthand = shorthand || this.getModelClassFromPath(path);
    this.schema = schema;
    this.serializerOrRegistry = serializerOrRegistry;
    this.shorthand = shorthand;
    this.options = options;
    this.paginator = options.paginator || new PagedPaginator(serializerOrRegistry);

    let type = Array.isArray(shorthand) ? 'array' : typeof shorthand;
    if (type === 'string') {
      let modelClass = this.schema[toCollectionName(shorthand)];
      this.handle = (request) => {
        return this.handleStringShorthand(request, modelClass);
      };
    } else if (type === 'array') {
      let modelClasses = shorthand.map((modelName) => this.schema[toCollectionName(modelName)]);
      this.handle = (request) => {
        return this.handleArrayShorthand(request, modelClasses);
      };
    }
  }

  // handleStringShorthand() {
  //
  // }
  //
  // handleArrayShorthand() {
  //
  // }

}
