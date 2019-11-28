import { combineReducers } from 'redux';
import ProductsReducer from '../modules/Products/pages/Products/reducers/products';
import ProductFormReducer from '../modules/Products/components/ProductForm/reducers';
import ProductReducer from '../modules/Products/pages/Product/reducer';
import authReducer from './auth';
import changeLayoutReducer from './changeLayout';

const rootReducer = combineReducers({
  authReducer,
  changeLayoutReducer,
  ProductsReducer,
  ProductFormReducer,
  ProductReducer
});

export default rootReducer;
