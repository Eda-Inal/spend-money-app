import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data"

export const productsSlice = createSlice({
    name : 'products',
    initialState : {
items:data,
price : 100000000000,
    },
    reducers : {
buyBtn : (state,action) => {
state.price -= action.payload
}
    }
});
export const {buyBtn} =productsSlice.actions;
export default productsSlice.reducer;