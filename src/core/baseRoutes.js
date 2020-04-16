// Components
import NotFoundRoute from 'containers/NotFoundRoute';
import RouteWrapper from 'utils/RouteWrapper';

// Routes
import appRoutes from 'containers/AppWrapper/routes';
import loginRoutes from 'containers/Login/routes';

const routes = [{
  component: RouteWrapper,
  routes: [{
    name: 'Login',
    path: '/login',
    component: RouteWrapper,
    routes: loginRoutes
  }, {
    name: 'AppWrapper',
    path: '/',
    component: RouteWrapper,
    routes: appRoutes
  }, {
    path: '**',
    component: NotFoundRoute
  }]
}];

export default routes;
