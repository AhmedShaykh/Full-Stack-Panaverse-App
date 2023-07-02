"use client";
import React, { FC } from 'react';
import getStripePromise from '@/lib/stripe';
import { useCookies } from "react-cookie";

const OrderProduct: FC<any> = ({ products }) => {

    const [, , removeCookie] = useCookies(["products"]);

    const handleCheckOut = async () => {

        const stripe = await getStripePromise();

        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-cache",
            body: JSON.stringify(products)
        });

        const data = await response.json();

        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }

        removeCookie("products");
    };

    return (
        <button
            className="text-lg md:text-xl font-semibold px-3 py-6 w-full rounded-lg text-white bg-black"
            onClick={handleCheckOut}
        >
            Check Out
        </button>
    )
};

export default OrderProduct;