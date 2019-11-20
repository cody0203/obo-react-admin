import React from "react";
import Loadable from "react-loadable";
import { Redirect } from "react-router-dom";
import productRoutes from "./modules/Products/routes";

function Loading({ error }) {
  if (error) {
    return "Oh nooess!";
  } else {
    return <h3>Loading...</h3>;
  }
}

const App = Loadable({
  loader: () => import("./App"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("./modules/Login"),
  loading: Loading
});

const DashboardLayout = Loadable({
  loader: () => import("../layout/BasicLayout"),
  loading: Loading
});

const Dashboard = Loadable({
  loader: () => import("./modules/Dashboard"),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import("./modules/NotFound"),
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
      {
        path: "/dashboard",
        component: DashboardLayout,
        routes: [
          {
            path: "/dashboard",
            title: "Dashboard",
            exact: true,
            component: Dashboard
          },
          ...productRoutes
        ]
      },
      {
        path: "*",
        title: "Not Found",
        component: NotFound
      }
    ]
  }
];
