import { FETCHING_PRODUCTS, DELETE_PRODUCT } from "../action-types";

export const fetchProducts = query => {
  return {
    type: FETCHING_PRODUCTS,
    query
  };
};

export const deleteProduct = id => {
  return {
    type: DELETE_PRODUCT,
    id
  };
};
