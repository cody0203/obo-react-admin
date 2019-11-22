import React from 'react';
import AsyncPage from 'app/utils/Loadable';

const path = 'modules/Products/pages';

const productRoutes = [
  {
    path: '/dashboard/products',
    title: 'Products',
    exact: true,
    component: () => <AsyncPage page={`${path}/Products`} />
  },
  {
    path: '/dashboard/products/:productId',
    title: 'Product',
    restrict: true,
    component: () => <AsyncPage page={`${path}/Product`} />
  },
  {
    path: '/dashboard/new-product',
    title: 'New Product',
    restrict: true,
    component: () => <AsyncPage page={`${path}/NewProduct`} />
  }
];

export default productRoutes;
