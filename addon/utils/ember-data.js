let _emberDataExists;

/**
 @hide
 */
export function hasEmberData(options) {
  if (_emberDataExists !== undefined) {
    return _emberDataExists;
  }
  let matchRegex1 = /^ember-data/i;
  let matchRegex2 = /^@ember-data/i;
  return _emberDataExists = !!(Object.keys(options.moduleMap).find(e => {
    return !!e.match(matchRegex2) || !!e.match(matchRegex1)
  }));
}

/**
  @hide
*/
export function isDsModel(m) {
  return m && typeof m.eachRelationship === 'function';
}
