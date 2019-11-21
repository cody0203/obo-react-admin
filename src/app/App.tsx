import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { DashboardLayout } from 'app/layout/BasicLayout';
import dashboardRoutes from 'app/modules/Dashboard/routes';
import publicRoute from 'routes';
import NotFound from './modules/NotFound';
import Auth from 'app/services/Auth';

const App: React.FC = () => {
  const commonRoutes = dashboardRoutes.map(route => {
    return (
      <DashboardLayout
        path={route.path}
        component={Auth(route.component)}
        key={route.path}
        exact={true}
      />
    );
  });

  const publicRoutes = publicRoute.map(route => {
    return (
      <Route path={route.path} component={route.component} key={route.path} />
    );
  });

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          component={() => <Redirect to="/dashboard" />}
          exact={true}
        />
        {publicRoutes}
        {commonRoutes}
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
