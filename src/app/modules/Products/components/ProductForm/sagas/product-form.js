import { takeLatest, call, put } from "redux-saga/effects";
import productFormTypes from "../action-types";
import {
  uploadedProduct,
  updateProduct
} from "app/modules/Products/services/api";

function* handleUploadedProduct(data) {
  try {
    const response = yield call(uploadedProduct, data);

    yield put({
      type: productFormTypes.UPLOADED_PRODUCT
    });
  } catch (err) {
    console.log(err);
  }
}

function* handleUpdatedProduct(data) {
  try {
    const response = yield call(updateProduct, data);

    yield put({
      type: productFormTypes.UPDATED_PRODUCT
    });
  } catch (err) {
    console.log(err);
  }
}

export default function* watcherSaga() {
  yield takeLatest(productFormTypes.UPLOAD_PRODUCT, handleUploadedProduct);
  yield takeLatest(productFormTypes.UPDATE_PRODUCT, handleUpdatedProduct);
}
