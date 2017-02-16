import RSVP from 'rsvp';

const TYPE_MAP = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regexp',
  '[object Object]': 'object',
  '[object FileList]': 'filelist'
};

export default {
  String: {
    capitalize: "",
    camelize: "",
    dasherize: "",
    underscore: ""
  },
  RSVP: { Promise: RSVP.Promise },
  isBlank: "",
  typeOf: function(item) {
    if (item === null) {
      return 'null';
    }
    if (item === undefined) {
      return 'undefined';
    }
    let ret = TYPE_MAP[toString.call(item)] || 'object';
    return ret;
  }
};
