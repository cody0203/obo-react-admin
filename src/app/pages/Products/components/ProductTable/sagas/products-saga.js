import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_PRODUCTS, FETCHED_DATA } from "../action-types";
import { fetchProducts } from "app/pages/Products/services/api";

function* workerSaga() {
  try {
    const fetched = yield call(fetchProducts);
    yield put({
      type: FETCHED_DATA,
      payload: fetched
    });
  } catch (err) {
    console.log(err);
  }
}

export default function* watcherSaga() {
  yield takeEvery(FETCH_PRODUCTS, workerSaga);
}
