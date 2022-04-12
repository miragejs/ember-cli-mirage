/* global requirejs */

function _hasEmberData() {
  let matchRegex1 = /^ember-data/i;
  let matchRegex2 = /^@ember-data/i;

  return !!Object.keys(requirejs.entries).find(
    (e) => !!e.match(matchRegex2) || !!e.match(matchRegex1)
  );
}

/**
  @hide
*/
export const hasEmberData = _hasEmberData();

/**
  @hide
*/
export function isDsModel(m) {
  return m && typeof m.eachRelationship === 'function';
}
