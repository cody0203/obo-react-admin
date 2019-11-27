import { all, fork } from 'redux-saga/effects';

import productSaga from './modules/Products/pages/Products/sagas/products-saga';
import NewProductSaga from './modules/Products/pages/NewProduct/sagas/new-product-saga';

export default function* rootSaga() {
  yield all([fork(productSaga), fork(NewProductSaga)]);
}
