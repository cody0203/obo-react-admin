import { FETCHING_PRODUCTS } from '../action-types';

export const fetchProducts = query => {
  return {
    type: FETCHING_PRODUCTS,
    query
  };
};
