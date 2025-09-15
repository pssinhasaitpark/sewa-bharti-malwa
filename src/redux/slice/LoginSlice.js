import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../redux/axios/axios';

// Async thunk for login
export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/auth/login', credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

// Async thunk for getting user data (ME API)
export const fetchUserData = createAsyncThunk(
    'auth/fetchUserData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/auth/me');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch user data');
        }
    }
);

// Combined thunk for login and fetching user data
export const loginAndFetchUser = createAsyncThunk(
    'auth/loginAndFetchUser',
    async (credentials, { dispatch, rejectWithValue }) => {
        try {
            // First, login the user
            const loginResponse = await axiosInstance.post('/auth/login', credentials);
            const { token, user } = loginResponse.data;

            // Store token in localStorage and axios headers
            localStorage.setItem('Authorization', token);
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Then fetch complete user data
            try {
                const userResponse = await axiosInstance.get('/auth/me');
                return {
                    token,
                    user: userResponse.data.user || userResponse.data
                };
            } catch (userError) {
                // If fetching user data fails, return the user from login response
                console.warn('Failed to fetch user data, using login response:', userError);
                return { token, user };
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem('Authorization');
            // Remove token from axios headers
            delete axiosInstance.defaults.headers.common['Authorization'];
        },
        clearError: (state) => {
            state.error = null;
        },
        // Action to set user from localStorage on app init
        setUserFromStorage: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }
    },
    extraReducers: (builder) => {
        builder
            // Login user cases
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('Authorization', action.payload.token);
                // Set token in axios headers
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Fetch user data cases
            .addCase(fetchUserData.pending, (state) => {
                // Don't set loading to true here as it might interfere with login loading
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user || action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Combined login and fetch user cases
            .addCase(loginAndFetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAndFetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginAndFetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout, clearError, setUserFromStorage } = authSlice.actions;
export default authSlice.reducer;