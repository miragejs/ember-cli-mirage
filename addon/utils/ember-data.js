/* global requirejs */

import { find as _find } from 'lodash-es';

function _hasEmberData() {
  let matchRegex = /^ember-data/i;
  return !!_find(Object.keys(requirejs.entries), (e) => !!e.match(matchRegex));
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
