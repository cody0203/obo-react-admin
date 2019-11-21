import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { DashboardLayout } from 'app/layout/BasicLayout';
import { rootRoutes } from '../rootRoutes';
import { publicRoutes } from '../publicRoutes';
import NotFound from './modules/NotFound';
import Auth from 'app/services/Auth';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          component={() => <Redirect to="/dashboard" />}
          exact={true}
        />
        {publicRoutes.map(route => {
          return (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
            />
          );
        })}
        {rootRoutes.map(route => {
          return (
            <DashboardLayout
              path={route.path}
              component={Auth(route.component)}
              key={route.path}
              exact={true}
            />
          );
        })}
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
