// src/redux/slices/createOrderSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios.js";

export const createOrder = createAsyncThunk(
  "createOrder/createOrder",
  async (amount, { rejectWithValue }) => {
    try {
      console.log("Creating order with amount:", amount);
      
      const response = await axiosInstance.post("/donations/create-order", {
        amount: amount
      });
      
      console.log("Create order response:", response.data);
      
      if (!response.data.success) {
        return rejectWithValue(response.data.message || "Failed to create order");
      }
      
      return response.data.order;
    } catch (error) {
      console.error("Create order error:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);

const createOrderSlice = createSlice({
  name: "createOrder",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    resetCreateOrderState: (state) => {
      state.loading = false;
      state.error = null;
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
        state.message = "Donation order created successfully";
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create order";
      });
  },
});

export const { resetCreateOrderState, clearError } = createOrderSlice.actions;
export default createOrderSlice.reducer;