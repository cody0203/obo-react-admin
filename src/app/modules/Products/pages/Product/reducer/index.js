import { FETCHED_PRODUCT } from '../action-types';

const initialState = {
  product: {}
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_PRODUCT:
      return {
        ...state,
        product: action.product
      };
    default:
      return state;
  }
};

export default ProductReducer;
