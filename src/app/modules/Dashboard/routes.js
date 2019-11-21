import Loadable from 'react-loadable';
import Loading from 'app/utils/Loading';
import Auth from 'app/services/Auth';
import routes from 'app/modules/Products/routes';

const withAuth = Auth('/login');

const DashboardLayout = Loadable({
  loader: () => import('app/layout/BasicLayout'),
  loading: Loading
});

const Dashboard = Loadable({
  loader: () => import('app/modules/Dashboard'),
  loading: Loading
});

const dashboardRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard
  },
  ...routes
];

export default dashboardRoutes;
