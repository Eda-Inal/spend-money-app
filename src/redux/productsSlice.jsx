import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data"

export const productsSlice = createSlice({
    name : 'products',
    initialState : {
items:data
    },
    reducers : {

    }
});

export default productsSlice.reducer;