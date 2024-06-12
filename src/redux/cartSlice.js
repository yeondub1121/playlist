import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        increase: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.amount += 1;
            }
        },
        decrease: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item) {
                item.amount -= 1;
                if (item.amount < 1) {
                    state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
                }
            }
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
