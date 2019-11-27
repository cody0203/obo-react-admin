import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCHING_PRODUCTS,
  FETCHED_DATA,
  DELETE_PRODUCT,
  DELETED_PRODUCTS
} from '../action-types';

import {
  fetchProducts,
  deleteProduct
} from 'app/modules/Products/services/api';

function* fetchedProducts(query) {
  try {
    const fetched = yield call(fetchProducts, query);
    yield put({
      type: FETCHED_DATA,
      payload: fetched
    });
  } catch (err) {}
}

function* deletedProduct(id) {
  try {
    const response = yield call(deleteProduct, id);

    if (response) {
      yield put({
        type: FETCHING_PRODUCTS
      });
      yield put({
        type: DELETED_PRODUCTS,
        payload: id.id
      });
    }
  } catch (err) {}
}

export default function* ProductSaga() {
  yield takeEvery(FETCHING_PRODUCTS, fetchedProducts);
  yield takeLatest(DELETE_PRODUCT, deletedProduct);
}
