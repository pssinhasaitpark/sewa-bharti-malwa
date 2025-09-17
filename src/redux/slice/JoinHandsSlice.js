import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios'; // Adjust path as needed

// Async thunk for submitting join hands form
export const submitJoinHandsForm = createAsyncThunk(
  'joinHands/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      // Transform the form data to match the expected API format
      const transformedData = {
        fullName: formData.name,
        mobileNumber: formData.mobile,
        emailAddress: formData.email,
        address: formData.address,
        city: formData.city,
        services: Object.keys(formData.services)
          .filter(key => formData.services[key])
          .map(key => {
            // Map service keys to readable names
            const serviceMap = {
              donate: 'Donate',
              volunteer: 'Be a Volunteer',
              csrActivity: 'Involve/Plan CSR Activity',
              pledgeHours: 'Pledge 2 Hours Weekly',
              educate: 'Educate Someone',
              profession: 'Help with Professional Skills',
              others: formData.othersText || 'Others'
            };
            return serviceMap[key];
          })
      };

      const response = await axiosInstance.post('/join-sewa', transformedData);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Failed to submit form',
        status: error.response?.status || 500
      });
    }
  }
);

const joinHandsSlice = createSlice({
  name: 'joinHands',
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: ''
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = '';
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitJoinHandsForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = '';
      })
      .addCase(submitJoinHandsForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.message = action.payload?.message || 'Form submitted successfully!';
      })
      .addCase(submitJoinHandsForm.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload?.message || 'Something went wrong';
        state.message = '';
      });
  }
});

export const { resetState, clearError, clearSuccess } = joinHandsSlice.actions;

// Selectors
export const selectJoinHandsLoading = (state) => state.joinHands.loading;
export const selectJoinHandsSuccess = (state) => state.joinHands.success;
export const selectJoinHandsError = (state) => state.joinHands.error;
export const selectJoinHandsMessage = (state) => state.joinHands.message;

export default joinHandsSlice.reducer;