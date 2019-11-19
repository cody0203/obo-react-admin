import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./app/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./app/sagas";

const initialSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(initialSagaMiddleware))
);

initialSagaMiddleware.run(rootSaga);

export default store;
