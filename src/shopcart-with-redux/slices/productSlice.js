import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//fetch products from dummyJson
export const fetchProduct = createAsyncThunk("products/fetch",
async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=6");
    return res.data.products;
});
const productSlice = createSlice({
    name:"products",
    initialState:{loading: false, items: [], error:null},
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});
export default productSlice.reducer;