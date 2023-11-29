import { dependencySatisfies } from '@embroider/macros';

/**
  @hide
*/
export const hasEmberData =
  dependencySatisfies('@ember-data/model', '*') ||
  dependencySatisfies('ember-data', '*');

/**
  @hide
*/
export function isDsModel(m) {
  return m && typeof m.eachRelationship === 'function' && m.isModel === true;
}
