import { combineReducers } from "redux";
import productReducer from "../modules/Products/pages/Products/reducers/products";

const rootReducer = combineReducers({ productReducer });

export default rootReducer;
