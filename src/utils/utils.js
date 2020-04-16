export function uuid() {
  let time = () => new Date();
  let uuid = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) + time().getTime();
  return uuid();
};

export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Update params and push new route state
export function goto(param) {
  let path = this.props.match.path;
  Object.keys(this.props.match.params).forEach((key) => {
    if (path.match(':' + key) && param.hasOwnProperty(key)) {
      path = path.replace(':' + key, param[key]);
      path = path.replace('?', '');
    } else {
      if (this.props.match.params[key] === 'undefined' || this.props.match.params[key] === undefined) {
        path = path.replace(':' + key, '');
        path = path.replace('?', '');
      } else {
        path = path.replace(':' + key, this.props.match.params[key]);
        path = path.replace('?', '');
      }
    }
  });
  this.props.history.push(path);
};

export const VALUE = 'value';
export const ERROR = 'error';
export const REQUIRED_FIELD_ERROR = 'This is required field';

function is_bool(value) {
  return typeof value === 'boolean';
}

/**
 * Determines a value if it's an object
 *
 * @param {object} value
 */
export function is_object(value) {
  return typeof value === 'object' && value !== null;
}

/**
 *
 * @param {string} value
 * @param {boolean} isRequired
 */
export function is_required(value, isRequired) {
  if (!value && isRequired) return REQUIRED_FIELD_ERROR;
  return '';
}

export function get_prop_values(stateSchema, prop) {
  return Object.keys(stateSchema).reduce((field, key) => {
    field[key] = is_bool(prop) ? prop : stateSchema[key][prop];

    return field;
  }, {});
}

/** Return user auth from local storage value */
export const getStoredUserAuth = () => {
  const auth = window.localStorage.getItem('userAuth');
  if (auth) {
    return JSON.parse(auth);
  }
};
