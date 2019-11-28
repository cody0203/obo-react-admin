import { all, fork } from 'redux-saga/effects';

import productsSaga from './modules/Products/pages/Products/sagas/products-saga';
import ProductForm from './modules/Products/components/ProductForm/sagas/product-form';
import ProductSaga from './modules/Products/pages/Product/sagas/product';

export default function* rootSaga() {
  yield all([fork(productsSaga), fork(ProductForm), fork(ProductSaga)]);
}
