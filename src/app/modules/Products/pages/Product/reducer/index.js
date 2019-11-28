import ProductTypes from "../action-types";

const initialState = {
  product: {}
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductTypes.FETCHED_PRODUCT:
      return {
        ...state,
        product: action.product
      };
    case ProductTypes.REMOVE_PRODUCT:
      return {
        ...state,
        product: {}
      };
    default:
      return state;
  }
};

export default ProductReducer;
