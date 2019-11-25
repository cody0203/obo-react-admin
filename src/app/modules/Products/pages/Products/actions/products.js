import { FETCH_PRODUCTS } from '../action-types';

export const fetchProducts = query => {
  return {
    type: FETCH_PRODUCTS,
    query
  };
};
