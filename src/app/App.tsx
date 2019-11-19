import React from "react";
import BasicLayout from "../layout/BasicLayout";
import { Switch, Route, withRouter } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <BasicLayout>
        <Switch>
          {routes.map(route => (
            <Route
              exact
              path={route.path}
              key={route.path}
              component={route.component}
            ></Route>
          ))}
        </Switch>
      </BasicLayout>
    </div>
  );
};

export default withRouter(App);
