/* global requirejs */

function _hasEmberData() {
  let matchRegex = /^ember-data/i;
  return !!(Object.keys(requirejs.entries).find(e => !!e.match(matchRegex)));
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
