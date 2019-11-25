import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCHING_PRODUCTS,
  FETCHED_DATA,
  DELETE_PRODUCT
} from "../action-types";
import {
  fetchProducts,
  deleteProduct
} from "app/modules/Products/services/api";

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
    yield put({
      type: DELETE_PRODUCT,
      payload: id
    });
  } catch (err) {}
}

export default function* watcherSaga() {
  yield takeLatest(FETCHING_PRODUCTS, fetchedProducts);
  yield takeLatest(DELETE_PRODUCT, deletedProduct);
}
