import React from "react";
import Loadable from "react-loadable";
import { Redirect } from "react-router-dom";

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

const DashboardLayout = Loadable({
  loader: () => import("../layout/BasicLayout"),
  loading: Loading
});

const Dashboard = Loadable({
  loader: () => import("./modules/Dashboard"),
  loading: Loading
});

const Products = Loadable({
  loader: () => import("./modules/Products/pages/Products"),
  loading: Loading
});

const NewProduct = Loadable({
  loader: () => import("./modules/Products/pages/NewProduct"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("./modules/Login"),
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
          {
            path: "/dashboard/products",
            title: "Products",
            exact: true,
            component: Products
          },
          {
            path: "/dashboard/new-product",
            title: "New Product",
            component: NewProduct
          }
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
