import React from "react";
import Loadable from "react-loadable";

function Loading({ error }) {
  if (error) {
    return "Oh nooess!";
  } else {
    return <h3>Loading...</h3>;
  }
}

const Dashboard = Loadable({
  loader: () => import("./pages/Dashboard"),
  loading: Loading
});

const Products = Loadable({
  loader: () => import("./pages/Products"),
  loading: Loading
});

export default [
  {
    path: "/",
    title: "Dashboard",
    component: Dashboard
  },
  {
    path: "/products",
    title: "Products",
    component: Products
  }
];
