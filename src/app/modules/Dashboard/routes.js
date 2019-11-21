import Loadable from 'react-loadable';
import Loading from 'app/utils/Loading';

const Dashboard = Loadable({
  loader: () => import('app/modules/Dashboard'),
  loading: Loading
});

const dashboardRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard
  }
];

export default dashboardRoutes;
