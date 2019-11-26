import {
  FETCHING_PRODUCTS,
  DELETE_PRODUCT,
  SET_LOADING
} from '../action-types';

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

export const setLoading = payload => {
  return {
    type: SET_LOADING,
    payload
  };
};
