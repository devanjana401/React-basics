import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find((p) => p.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
            else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((p) => p.id !== action.payload);
        },
        incrementQty: (state, action) => {
            console.log("increment....");
            const item = state.find((p) => p.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQty: (state, action) => {
            console.log("decrement....");
            const item = state.find((p) => p.id === action.payload.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                }
                else {
                    return state.filter((p) => p.id !== action.payload.id);
                }
            }
        },
        clearCart: () => {
            return [];
        }
    }
})
export const {addToCart,removeFromCart,incrementQty,decrementQty,clearCart} = cartSlice.actions;

export default cartSlice.reducer;