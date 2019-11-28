import ProductTypes from "../action-types";

export const fetchProductCreator = id => {
  return {
    type: ProductTypes.FETCH_PRODUCT,
    id
  };
};

export const removeProduct = () => {
  return {
    type: ProductTypes.REMOVE_PRODUCT
  };
};
