let _emberDataExists;

/**
 @hide
 */
export function hasEmberData(options) {
  if (_emberDataExists !== undefined) {
    return _emberDataExists;
  }
  let matchRegex = /^@ember-data/i;
  return _emberDataExists = !!(Object.keys(options.moduleMap).find(e => !!e.match(matchRegex)));
}

/**
  @hide
*/
export function isDsModel(m) {
  return m && typeof m.eachRelationship === 'function';
}
