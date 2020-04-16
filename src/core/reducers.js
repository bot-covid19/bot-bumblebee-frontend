import { combineReducers } from 'redux';

import AppWrapper from 'containers/AppWrapper/reducer';
import HomeCarePatients from 'containers/HomeCarePatients/reducer';

export default combineReducers({
  app: AppWrapper,
  homeCarePatients: HomeCarePatients
});
