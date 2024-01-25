import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data"

export const productsSlice = createSlice({
    name : 'products',
    initialState : {
items:data,
price : "100,000,000,000",
    },
    reducers : {

    }
});

export default productsSlice.reducer;