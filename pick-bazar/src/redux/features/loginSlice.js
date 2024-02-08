import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userId: 0,
    username: "",
    error: "",
    email: "",
    first_name: "",
    last_name: "",
    image: null,
    token: "",
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};


export const userLogin = createAsyncThunk(
    'login/userLogin',
    async (body) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/accounts/api/login/`, body);
        const token = response.data.token;
        localStorage.setItem('access_token', JSON.stringify(token));
        return (await response.data);
    }
);

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.loading = 'succeeded';
            state.id = action.payload.id;
            state.token = action.payload.token;
        });
        builder.addCase(userLogin.rejected, (state) => {
            state.isSuccess = false;
            state.loading = 'failed';
        });
    }
});

export default authSlice.reducer;