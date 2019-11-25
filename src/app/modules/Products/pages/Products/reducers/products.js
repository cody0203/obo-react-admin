import {
  FETCHED_DATA,
  FETCHING_PRODUCTS,
  DELETE_PRODUCT
} from "../action-types";

const initialState = {
  products: [],
  pagination: {
    totalProducts: 0,
    limit: 0,
    page: 1,
    sort: "",
    order: ""
  },
  loading: true
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCHED_DATA:
      return {
        ...state,
        products: action.payload.products,
        pagination: action.payload.pagination,
        loading: false
      };
    case DELETE_PRODUCT:
      let ids, newProducts;
      if (action.payload) {
        ids = action.payload;
        newProducts = [...state.products];
        newProducts.filter(product => {
          return !ids.includes(product.id);
        });
      }
      return { ...state, products: newProducts };
    default:
      return state;
  }
};

export default productReducer;
