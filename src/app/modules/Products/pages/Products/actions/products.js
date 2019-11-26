import {
  FETCHING_PRODUCTS,
  DELETE_PRODUCT,
  SET_LOADING,
  SET_CURRENT_PRODUCT
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

export const setCurrentProduct = payload => {
  return {
    type: SET_CURRENT_PRODUCT,
    payload
  };
};
