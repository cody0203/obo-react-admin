import { UPLOAD_PRODUCT } from '../action-types';

export const uploadProduct = data => {
  return {
    type: UPLOAD_PRODUCT,
    data
  };
};
