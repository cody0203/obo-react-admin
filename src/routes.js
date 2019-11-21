import React from 'react';
import Loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';
import Loading from 'app/utils/Loading';
import Auth from 'app/services/Auth';

const withAuth = Auth('/login');

const Login = Loadable({
  loader: () => import('./app/modules/Login'),
  loading: Loading
});

const publicRoute = [
  {
    path: '/login',
    title: 'Login',
    component: Login
  }
];

export default publicRoute;
