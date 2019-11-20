import React from "react";
import Loadable from "react-loadable";

function Loading({ error }) {
  if (error) {
    return "Oh nooess!";
  } else {
    return <h3>Loading...</h3>;
  }
}

const Products = Loadable({
  loader: () => import("./pages/Products"),
  loading: Loading
});

const Product = Loadable({
  loader: () => import("./pages/Product"),
  loading: Loading
});

const NewProduct = Loadable({
  loader: () => import("./pages/NewProduct"),
  loading: Loading
});

const productRoutes = [
  {
    path: "/dashboard/products",
    title: "Products",
    exact: true,
    component: Products
  },
  {
    path: "/dashboard/products/:productId",
    title: "Product",
    component: Product
  },
  {
    path: "/dashboard/new-product",
    title: "New Product",
    component: NewProduct
  }
];

export default productRoutes;
