let association = function(nameOverride, ...traitsAndOverrides) {
  let __isAssociation__ = true;
  return {
    nameOverride,
    __isAssociation__,
    traitsAndOverrides
  };
};

export default association;
