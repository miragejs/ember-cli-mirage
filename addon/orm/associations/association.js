import { camelize } from 'ember-cli-mirage/utils/inflector';

class Association {

  constructor(modelTypeKey) {
    this.modelTypeKey = modelTypeKey;

    // The model type that owns this association
    this.owner = '';

    // The model type this association refers to
    this.target = '';
  }

  // TODO: Schema currently injected in subclasses #addMethodsToModelClass. How to fix this?
  _classForOwner() {
    return this._schema[camelize(this.owner)];
  }

  _classForTarget() {
    return this._schema[camelize(this.target)];
  }

}

export default Association;
