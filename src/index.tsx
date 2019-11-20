import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { IntlProvider } from "react-intl";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { PersistGate } from "redux-persist/integration/react";
import Loadable from "react-loadable";

Loadable.preloadReady().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider locale="vi">
          <Router>
            <Switch>{renderRoutes(routes)}</Switch>
          </Router>
        </IntlProvider>
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
