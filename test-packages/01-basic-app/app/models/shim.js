// Mimics the static apis of ShimModelClass from ember-data
export default class Shim {
  fields;
  attributes;
  relationshipsByName;

  eachAttribute() {}
  eachRelationship() {}
  eachTransformedAttribute() {}
}
