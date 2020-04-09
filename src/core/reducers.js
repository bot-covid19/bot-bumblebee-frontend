import { combineReducers } from 'redux';

import AppWrapper from 'containers/AppWrapper/reducer';

export default combineReducers({
  app: AppWrapper
});
