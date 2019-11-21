import Loadable from 'react-loadable';
import Loading from 'app/utils/Loading';

const Login = Loadable({
  loader: () => import('./index'),
  loading: Loading
});

const loginRoute = [
  {
    path: '/login',
    title: 'Login',
    component: Login
  }
];

export default loginRoute;
