import { configureStore } from '@reduxjs/toolkit';
import createOrderReducer from './slice/CreateOrderSlice.js';
import authReducer from "./slice/LoginSlice.js"

const store = configureStore({
  reducer: {
    createOrder: createOrderReducer,
    auth: authReducer
  },
});

export default store;
