class Association {

  constructor(type, options = {}) {
    this.type = type;

    // The model type that owns this association
    this.owner = '';

    // The model type this association refers to
    this.target = '';

    this.options = options;

    this.key = '';
  }

}

export default Association;
