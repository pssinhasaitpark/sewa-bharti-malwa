import { configureStore } from '@reduxjs/toolkit';
import createOrderReducer from './slice/CreateOrderSlice.js';
import authReducer from "./slice/LoginSlice.js"
import joinHandsReducer from './slice/JoinHandsSlice.js';
const store = configureStore({
  reducer: {
    createOrder: createOrderReducer,
    auth: authReducer,
      joinHands: joinHandsReducer,
  },
});

export default store;
