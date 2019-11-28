import productFormTypes from "../action-types";

export const uploadProduct = data => {
  return {
    type: productFormTypes.UPLOAD_PRODUCT,
    data
  };
};

export const updateProduct = data => {
  return {
    type: productFormTypes.UPDATE_PRODUCT,
    data
  };
};
