import { FETCH_PRODUCT, REMOVE_PRODUCT } from '../action-types';

export const fetchProductCreator = id => {
  return {
    type: FETCH_PRODUCT,
    id
  };
};

export const removeProduct = () => {
  return {
    type: REMOVE_PRODUCT
  };
};
