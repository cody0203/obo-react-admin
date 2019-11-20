import { all, fork } from "redux-saga/effects";

import productSaga from "./modules/Products/pages/Products/components/ProductTable/sagas/products-saga";

export default function* rootSaga() {
  yield all([fork(productSaga)]);
}
