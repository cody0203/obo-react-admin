import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import ProductsTypes from "../action-types";

import {
  fetchProducts,
  deleteProduct
} from "app/modules/Products/services/api";

function* fetchedProducts(query) {
  try {
    const fetched = yield call(fetchProducts, query);
    yield put({
      type: ProductsTypes.FETCHED_DATA,
      payload: fetched
    });
  } catch (err) {}
}

function* deletedProduct(id) {
  try {
    const response = yield call(deleteProduct, id);

    if (response) {
      yield put({
        type: ProductsTypes.FETCHING_PRODUCTS
      });
      yield put({
        type: ProductsTypes.DELETED_PRODUCTS,
        payload: id.id
      });
    }
  } catch (err) {}
}

export default function* ProductSaga() {
  yield takeEvery(ProductsTypes.FETCHING_PRODUCTS, fetchedProducts);
  yield takeLatest(ProductsTypes.DELETE_PRODUCT, deletedProduct);
}
