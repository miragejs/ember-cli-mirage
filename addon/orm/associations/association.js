export default class Association {

  constructor(modelName, opts) {
    if (typeof modelName === 'object') {
      // Received opts only
      this.modelName = undefined;
      this.opts = modelName;
    } else {
      // The modelName of the association
      this.modelName = modelName;
      this.opts = opts || {};
    }

    // The key pointing to the association
    this.key = '';

    // The modelName that owns this association
    this.ownerModelName = '';
  }

  /**
   * We don't know the schema at constuction time, so this method
   * lets you set a reference to it.
   *
   * @method setSchema
   * @public
  */
  setSchema(schema) {
    this.schema = schema;
  }

  /**
   * Returns this association's inverse, if it exists
   *
   * @method inverse
   * @return {Object} the inverse association
   * @public
  */
  inverse() {
    let inverse;

    if (this.opts.inverse === null) {
      inverse = null;

    } else if (this.isReflexive()) {
      inverse = this;

    } else {
      let associationsMap = this.schema.associationsFor(this.modelName);
      let matches = Object.keys(associationsMap)
        .map(key => associationsMap[key])
        .filter(association => association.modelName === this.ownerModelName);

      if (matches.length === 1) {
        inverse = matches[0];
      }
    }

    return inverse;
  }

  /**
   * Returns true if the association is reflexive, false otherwise
   *
   * @method isReflexive
   * @return {Boolean}
   * @public
  */
  isReflexive() {
    let isExplicitReflexive = !!(this.modelName === this.ownerModelName && this.opts.inverse);
    let isImplicitReflexive = !!(this.opts.inverse === undefined && this.ownerModelName === this.modelName);

    return isExplicitReflexive || isImplicitReflexive;
  }

  /**
   * Used to check if models match each other. If models are saved, we check model type
   * and id, since they could have other non-persisted properties that are different.
   *
   * @public
  */
  inversesMatch(inverse, owner) {
    let inverseKey = this.inverse().key;
    let modelOnInverse = inverse[inverseKey];

    if (modelOnInverse && owner) {
      if (modelOnInverse.isSaved() && owner.isSaved()) {
        return modelOnInverse.toString() === owner.toString();
      } else {
        return modelOnInverse === owner;
      }
    }
  }
}
