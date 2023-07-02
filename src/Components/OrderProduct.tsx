"use client";
// import React, { FC } from 'react';
import getStripePromise from '@/lib/stripe';

const products = [
    {
        product: 1,
        name: "Stripe Product",
        price: 400,
        quantity: 3,
    },
    {
        product: 2,
        name: "Stripe Product2",
        price: 40,
        quantity: 2,
    },
    {
        product: 3,
        name: "Stripe Product23",
        price: 4000,
        quantity: 1,
    },
];

const OrderProduct = () => {

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

        console.log(products);

    };
    return (
        <button
            className="text-xl font-semibold p-6 w-full rounded-lg text-white bg-black"
            onClick={handleCheckOut}
        >
            Check Out
        </button>
    )
};

export default OrderProduct;