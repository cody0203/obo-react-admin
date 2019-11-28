import ProductsTypes from "../action-types";

const initialState = {
  products: [],
  pagination: {
    totalProducts: 0,
    limit: 0,
    page: 1,
    sort: "",
    order: ""
  },
  currentProduct: {}
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductsTypes.FETCHING_PRODUCTS: {
      return {
        ...state
      };
    }
    case ProductsTypes.FETCHED_DATA:
      return {
        ...state,
        products: action.payload.products,
        pagination: action.payload.pagination
      };
    case ProductsTypes.DELETED_PRODUCTS:
      const newProducts = [...state.products].filter(product => {
        return !action.payload.includes(product.id);
      });

      return { ...state, products: newProducts };
    case ProductsTypes.SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload
      };
    default:
      return state;
  }
};

export default ProductsReducer;
