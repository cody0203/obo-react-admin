import productFormTypes from "../modules/Products/components/ProductForm/action-types";
import ProductTypes from "../modules/Products/pages/Product/action-types";
import ProductsTypes from "../modules/Products/pages/Products/action-types";

const initialState = {
  loading: false
};

console.log(productFormTypes);

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case productFormTypes.UPDATE_PRODUCT:
    case productFormTypes.UPLOAD_PRODUCT:
    case ProductTypes.FETCH_PRODUCT:
    case ProductsTypes.DELETE_PRODUCT:
    case ProductsTypes.FETCHING_PRODUCTS:
      return { ...state, loading: true };
    case productFormTypes.UPDATED_PRODUCT:
    case productFormTypes.UPLOADED_PRODUCT:
    case ProductTypes.FETCHED_PRODUCT:
    case ProductsTypes.FETCHED_DATA:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default loadingReducer;
