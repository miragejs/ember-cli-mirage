import { isPlainObject as _isPlainObject } from 'lodash-es';

/**
  @hide
*/
export default function(object) {
  return _isPlainObject(object) && object.__isAssociation__ === true;
}
