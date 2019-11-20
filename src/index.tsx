import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { IntlProvider } from "react-intl";
import { renderRoutes } from "react-router-config";
import routes from "./app/routes";

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="vi">
      <Router>
        <Switch>{renderRoutes(routes)}</Switch>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
