import { put, call, takeEvery } from "redux-saga/effects";

import ProductTypes from "../action-types";
import { fetchProduct } from "app/modules/Products/services/api";

function* fetchedProduct(id) {
  try {
    const response = yield call(fetchProduct, id);
    yield put({
      type: ProductTypes.FETCHED_PRODUCT,
      product: response.product
    });
  } catch (err) {
    console.log(err);
  }
}

export default function* watcherSaga() {
  yield takeEvery(ProductTypes.FETCH_PRODUCT, fetchedProduct);
}
