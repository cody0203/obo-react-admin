import ProductsTypes from "../action-types";

export const fetchProducts = query => {
  return {
    type: ProductsTypes.FETCHING_PRODUCTS,
    query
  };
};

export const deleteProduct = id => {
  return {
    type: ProductsTypes.DELETE_PRODUCT,
    id
  };
};

export const setCurrentProduct = payload => {
  return {
    type: ProductsTypes.SET_CURRENT_PRODUCT,
    payload
  };
};
