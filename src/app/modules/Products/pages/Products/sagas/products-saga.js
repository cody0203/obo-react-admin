import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCHING_PRODUCTS, FETCHED_DATA } from '../action-types';
import { fetchProducts } from 'app/modules/Products/services/api';

function* workerSaga(query) {
  try {
    const fetched = yield call(fetchProducts, query);
    yield put({
      type: FETCHED_DATA,
      payload: fetched
    });
  } catch (err) {}
}

export default function* watcherSaga() {
  yield takeEvery(FETCHING_PRODUCTS, workerSaga);
}
