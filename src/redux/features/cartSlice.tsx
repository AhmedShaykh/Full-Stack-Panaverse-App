import { urlForImage } from "../../../sanity/lib/image";
// import { Product } from "../../../Types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    items: Array<any>;
    totalAmount: number;
    totalQuantity: number;
};

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(
            state: CartState,
            action: PayloadAction<{
                product: any;
                quantity: number
            }>
        ) {
            const newItem = action.payload.product;

            const existingItem = state.items.find((item) => item._id === newItem._id);

            state.totalQuantity = state.totalQuantity + action.payload.quantity;

            state.totalAmount = state.totalAmount + action.payload.quantity * action.payload.product.price;

            if (!existingItem) {

                const totalPrice = newItem.price * action.payload.quantity;

                state.items.push({
                    ...newItem,
                    quantity: action.payload.quantity,
                    totalPrice
                });

            } else {

                const totalPrice = existingItem.totalPrice + existingItem.price * action.payload.quantity;

                existingItem.quantity += action.payload.quantity;

                existingItem.totalPrice = totalPrice;
            }
        },
        removeProduct(state: CartState, action: PayloadAction<string>) {

            const productId = action.payload;

            state.items = state.items.filter((item) => item._id !== productId);

            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);

            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },
        removeFromCart(state: CartState, action: PayloadAction<string>) {

            const productId = action.payload;

            const existingItem = state.items.find((item) => item._id === productId);

            state.totalQuantity--;

            state.totalAmount = state.totalAmount - existingItem?.price!;

            if (existingItem?.quantity === 1) {

                state.items = state.items.filter((item) => item._id !== productId);

            } else {

                existingItem!.quantity--;

                existingItem!.totalPrice = existingItem!.totalPrice - existingItem?.price!;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;