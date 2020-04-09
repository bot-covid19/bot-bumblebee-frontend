export function uuid() {
  let time = () => new Date();
  let uuid = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) + time().getTime();
  return uuid();
};

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
