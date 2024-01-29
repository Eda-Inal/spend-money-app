import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data"


const originalPrice = 100000000000;
export const productsSlice = createSlice({
    
    name: 'products',
    initialState: {
        items: data,
        price: 100000000000,
        originalPrice: originalPrice
       

    },
    reducers: {
        buyBtn: (state, action) => {
            const { id, price } = action.payload
            const selectedItem = state.items.find((item) => item.id === id);
            if (selectedItem && state.price >= price) {
                selectedItem.click += 1;
                selectedItem.amount += price
                state.price -= price
            }

        },
        sellBtn: (state, action) => {
            const { id, price } = action.payload;
            const selectedItem = state.items.find((item) => item.id === id);
            if (selectedItem && selectedItem.click > 0) {
                state.price += price;
                selectedItem.amount -= price
                selectedItem.click -= 1;
            }
        },
        incrementByAmount: (state, action) => {
            const { id, amount, price } = action.payload;
            const selectedItem = state.items.find((item) => item.id === id);
          
            if (selectedItem) {
              const totalAmount = state.items.reduce((total, item) => total + item.amount, 0);
              selectedItem.click = amount;
              selectedItem.amount = amount * price;
              state.price = state.originalPrice - totalAmount;
            }
          }
          

    }
});
export const { buyBtn, sellBtn, incrementByAmount } = productsSlice.actions;
export default productsSlice.reducer;