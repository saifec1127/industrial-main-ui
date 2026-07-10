import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});