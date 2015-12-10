class Association {

  constructor(type, polymorphic = false) {
    this.type = type;

    // The model type that owns this association
    this.owner = '';

    // The model type this association refers to
    this.target = '';

    this.polymorphic = polymorphic;
  }

}

export default Association;
