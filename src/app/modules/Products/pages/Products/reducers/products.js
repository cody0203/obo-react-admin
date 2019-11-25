import { FETCHED_DATA, FETCHING_PRODUCTS } from '../action-types';

const initialState = {
  products: [],
  pagination: {
    totalProducts: 0,
    limit: 0,
    page: 1,
    sort: '',
    order: ''
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
    default:
      return state;
  }
};

export default productReducer;
