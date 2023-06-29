/**
  @hide
*/
export function isDsModel(m) {
  return m && typeof m.eachRelationship === 'function';
}
