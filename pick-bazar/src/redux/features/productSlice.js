import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

const initialState = {
    error: "",
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    products: [],
    categoryTitle: "",
    count: 0,
    next: null,
    previous: null,
    product: {}
};

export const getProductsByCategoryId = createAsyncThunk(
    'product/getProductsByCategoryId',
    async (categoryId) => {
        const response = await axios.get(`${apiUrl}/api/categories/${categoryId}/`);
        return (await response.data);
    }
);

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async () => {
        const response = await axios.get(`${apiUrl}/api/products/`);
        return (await response.data);
    }
);

export const getProductById = createAsyncThunk(
    'product/getProductById',
    async (productId) => {
        const response = await axios.get(`${apiUrl}/api/products/${productId}/`);
        return (await response.data);
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsByCategoryId.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.categoryTitle = action.payload.title;
            state.loading = 'succeeded';
        });
        builder.addCase(getProductsByCategoryId.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getProductsByCategoryId.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error;
        });

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.count = action.payload.count;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
            state.loading = 'succeeded';
        });
        builder.addCase(getProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error;
        });

        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.product = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getProductById.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getProductById.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error;
        });
    }
});

export default productSlice.reducer;