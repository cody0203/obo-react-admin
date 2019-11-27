import { takeLatest, call } from 'redux-saga/effects';
import { UPLOAD_PRODUCT } from '../action-types';
import { uploadedProduct } from 'app/modules/Products/services/api';

function* handleUploadedProduct(data) {
  try {
    const response = yield call(uploadedProduct, data);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export default function* watcherSaga() {
  yield takeLatest(UPLOAD_PRODUCT, handleUploadedProduct);
}
