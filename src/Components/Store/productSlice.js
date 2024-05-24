import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    allProducts: null,
    isLoading : false,
  
}

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    let res = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
    return res;
})

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
       
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allProducts = action.payload.data;
               
                console.log("data", action.payload.data)
            })
            .addCase(getAllProducts.pending, (state, action) => {
                state.isLoading = true;
               
            })
    }
})

export default productSlice.reducer;