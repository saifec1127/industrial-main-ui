import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/store/authSlice";
import userReducer from "../features/user/userSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});