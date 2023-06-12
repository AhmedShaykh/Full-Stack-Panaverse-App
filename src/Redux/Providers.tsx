"use client";
import { store } from "@/Store/Store";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
            <Toaster reverseOrder={true} />
        </Provider>
    )
};

export default Providers;