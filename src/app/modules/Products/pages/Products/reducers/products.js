import {
  FETCHED_DATA,
  FETCHING_PRODUCTS,
  DELETED_PRODUCTS,
  SET_LOADING
} from '../action-types';

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
    case DELETED_PRODUCTS:
      const newProducts = [...state.products].filter(product => {
        return !action.payload.includes(product.id);
      });

      return { ...state, products: newProducts, loading: true };
      case SET_LOADING:
        return {
          ...state, loading: action.payload
        }
    default:
      return state;
  }
};

export default productReducer;
