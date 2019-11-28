import { put, call, takeEvery } from 'redux-saga/effects';

import { FETCH_PRODUCT, FETCHED_PRODUCT } from '../action-types';
import { fetchProduct } from 'app/modules/Products/services/api';

function* fetchedProduct(id) {
  console.log('a');
  try {
    const response = yield call(fetchProduct, id);
    yield put({
      type: FETCHED_PRODUCT,
      product: response.product
    });
  } catch (err) {}
}

export default function* watcherSaga() {
  yield takeEvery(FETCH_PRODUCT, fetchedProduct);
}
