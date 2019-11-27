import { combineReducers } from 'redux';
import productReducer from '../modules/Products/pages/Products/reducers/products';
import newProductReducer from '../modules/Products/pages/NewProduct/reducers/index';
import authReducer from './auth';
import changeLayoutReducer from './changeLayout';

const rootReducer = combineReducers({
  authReducer,
  changeLayoutReducer,
  productReducer,
  newProductReducer
});

export default rootReducer;
