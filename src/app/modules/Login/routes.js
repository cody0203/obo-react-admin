import React from 'react';

import AsyncPage from 'app/utils/Loadable';

const loginRoute = [
  {
    path: '/login',
    title: 'Login',
    component: () => <AsyncPage page="modules/Login" />
  }
];

export default loginRoute;
