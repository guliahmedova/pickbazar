import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

const initialState = {
    error: "",
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    categories: []
};

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async () => {
        const response = await axios.get(`${apiUrl}/api/categories/`);
        return (await response.data);
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getCategories.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getCategories.rejected, (state) => {
            state.loading = 'failed'
        });
    }
});

export default categorySlice.reducer;