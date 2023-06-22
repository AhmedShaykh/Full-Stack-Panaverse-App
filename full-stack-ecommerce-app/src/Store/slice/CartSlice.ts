import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
    items: Array<any>;
    totalAmount: number;
    totalQuantity: number;
};

const initialState: CartState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, actions: PayloadAction<any>) => {
           state.totalQuantity += actions.payload.quantity
        },
        removeToCart: (state, actions: PayloadAction<any>) => {
            state.totalQuantity -= actions.payload.quantity
        },
        clearCart: (state) => {
            state = initialState;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;