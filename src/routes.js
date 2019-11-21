import React from "react";
import Loadable from "react-loadable";
import { Redirect } from "react-router-dom";
import Loading from "app/utils/Loading";
import Auth from "app/services/Auth";

import productRoutes from "app/modules/Products/routes";
import dashboardRoutes from "app/modules/Dashboard/routes";

const withAuth = Auth("/login");

const App = Loadable({
  loader: () => import("./app/App"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("./app/modules/Login"),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import("./app/modules/NotFound"),
  loading: Loading
});

export default [
  {
    component: App,
    routes: [
      { path: "/", component: () => <Redirect to="/dashboard" />, exact: true },
      {
        path: "/login",
        title: "Login",
        component: Login
      },
      // productRoutes là child route của dashboardRoutes
      dashboardRoutes(productRoutes),
      {
        path: "*",
        title: "Not Found",
        component: NotFound
      }
    ]
  }
];
