import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./app/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./app/sagas";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const initialSagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  storeEnhancers(applyMiddleware(initialSagaMiddleware))
);

export const persistor = persistStore(store);

initialSagaMiddleware.run(rootSaga);
