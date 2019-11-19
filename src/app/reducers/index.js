import { combineReducers } from "redux";
import productReducer from "../pages/Products/components/ProductTable/reducers/products";

const rootReducer = combineReducers({ productReducer });

export default rootReducer;
