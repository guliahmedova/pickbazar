import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from "@/redux/features/loginSlice";
import categoryReducer from "@/redux/features/categorySlice";
import productReducer from "@/redux/features/productSlice";

const rootReducer = combineReducers({
    auth: loginReducer,
    category: categoryReducer,
    product: productReducer
});

export default rootReducer;