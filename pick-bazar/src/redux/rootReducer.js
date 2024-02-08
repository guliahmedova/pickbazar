import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from "@/redux/features/loginSlice";
import categoryReducer from "@/redux/features/categorySlice";

const rootReducer = combineReducers({
    auth: loginReducer,
    category: categoryReducer,
});

export default rootReducer;