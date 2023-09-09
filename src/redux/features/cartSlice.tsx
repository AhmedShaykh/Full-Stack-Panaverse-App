import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urlForImage } from "../../../sanity/lib/image";
import getDomain from "@/lib/getDomain";
import { RootState } from "../store";
import { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    items: Array<any>;
    totalAmount: number;
    totalQuantity: number;
    isLoading: boolean;
    error: any;
};

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    isLoading: false,
    error: null
};

export const fetchData = createAsyncThunk("cart/fetchData",

    async (userId: string) => {

        const res = await fetch(
            `${getDomain}/api/getcart/${userId}`
        );

        if (!res.ok) {
            console.log("Failed To Fetch Data From API");
        }

        const data = await res.json();

        return data;
    }
);

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
                    image: urlForImage(newItem.image).url(),
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
        updateFromCart(state: CartState, action: PayloadAction<string>) {

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

            const existingItemIndex = state.items.findIndex((item) => item._id === productId);

            if (existingItemIndex !== -1) {

                const existingItem = state.items[existingItemIndex];

                if (existingItem.quantity === 1) {

                    state.items.splice(existingItemIndex, 1);

                } else {

                    existingItem.quantity--;

                    existingItem.totalPrice -= existingItem.price;
                }

                state.totalQuantity--;

                state.totalAmount -= existingItem.price;

            }
        },
        clearCart(state: CartState) {
            state = initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            const { cartItems, totalQuantity, totalAmount } = action.payload;
            state.items = cartItems;
            state.totalAmount = totalAmount;
            state.totalQuantity = totalQuantity;
            state.isLoading = false;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const selectIsLoading = (state: RootState) => state.cart.isLoading;

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;