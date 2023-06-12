import { configureStore } from '@reduxjs/toolkit';
import CartState from './slice/CartSlice';

export const store = configureStore({
    reducer: {
        cart: CartState
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;