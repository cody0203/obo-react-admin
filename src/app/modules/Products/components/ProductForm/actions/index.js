import { UPLOAD_PRODUCT, UPDATE_PRODUCT } from '../action-types';

export const uploadProduct = data => {
  return {
    type: UPLOAD_PRODUCT,
    data
  };
};

export const updateProduct = data => {
  return {
    type: UPDATE_PRODUCT,
    data
  }
}