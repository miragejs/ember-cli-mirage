let trait = function(...args) {
  let __isTrait__ = true;
  let extension = args[args.length - 1];

  let traits = args.filter(arg => typeof arg === 'string');
  let composed = traits.length > 0;

  if (typeof extension !== 'object') {
    extension = {};
  }

  if (composed) {
    // Composed Trait
    let __isComposed__ = true;

    return {
      extension,
      traits,
      __isTrait__,
      __isComposed__
    };
  } else {
    return {
      extension,
      __isTrait__
    };
  }
};

/**
  @hide
*/
export default trait;
