import { FETCHED_DATA } from "../action-types";

const initialState = {
  products: [],
  pagination: {
    totalProducts: 0,
    limit: 0,
    page: 0,
    sort: "",
    order: ""
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_DATA:
      return {
        ...state,
        products: action.payload.products,
        pagination: action.payload.pagination
      };
    default:
      return state;
  }
};

export default productReducer;
