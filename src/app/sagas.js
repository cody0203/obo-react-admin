import { all, fork } from "redux-saga/effects";

import productSaga from "./modules/Products/pages/Products/sagas/products-saga";

export default function* rootSaga() {
  yield all([fork(productSaga)]);
}
