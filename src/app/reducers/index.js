import { combineReducers } from 'redux';
import productReducer from '../modules/Products/pages/Products/reducers/products';
import authReducer from './auth';
const rootReducer = combineReducers({ authReducer, productReducer });

export default rootReducer;
