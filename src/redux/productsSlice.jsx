import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data"

export const productsSlice = createSlice({
    name : 'products',
    initialState : {
items:data,
price : 100000000000,

    },
    reducers : {
buyBtn : (state,action) =>{
    const {id,price} =action.payload
    const selectedItem = state.items.find((item) => item.id===id);
    if(selectedItem && state.price >= price){
        selectedItem.click +=1; 
        state.price -=price
    }
   
},
sellBtn : (state,action) => {
    const {id,price} =action.payload;
    const selectedItem = state.items.find((item) => item.id===id);
if(selectedItem && selectedItem.click >0){
    state.price +=price;
    selectedItem.click -=1;
}
    
    
    
    }
    }
});
export const {buyBtn,sellBtn} =productsSlice.actions;
export default productsSlice.reducer;