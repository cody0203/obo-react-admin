import { combineReducers } from 'redux';
import productReducer from '../modules/Products/pages/Products/reducers/products';
import authReducer from './auth';
import changeLayoutReducer from './changeLayout';

const rootReducer = combineReducers({
  authReducer,
  changeLayoutReducer,
  productReducer
});

export default rootReducer;
