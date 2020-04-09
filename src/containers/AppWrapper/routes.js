import AppWrapper from 'containers/AppWrapper';
import HomeCarePatients from 'containers/HomeCarePatients';

const routes = [{
  name: 'AppWrapper',
  path: '/',
  exact: true,
  component: AppWrapper,
  routes: [{
    name: 'HomeCarePatients',
    path: '/',
    component: HomeCarePatients
  }]
}];

export default routes;
