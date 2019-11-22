import React from 'react';

import AsyncPage from 'app/utils/Loadable';

const dashboardRoutes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: () => <AsyncPage page="modules/Dashboard" />
  }
];

export default dashboardRoutes;
