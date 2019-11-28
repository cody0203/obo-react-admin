import { FETCH_PRODUCT } from '../action-types';

export const fetchProductCreator = id => {
  return {
    type: FETCH_PRODUCT,
    id
  };
};
