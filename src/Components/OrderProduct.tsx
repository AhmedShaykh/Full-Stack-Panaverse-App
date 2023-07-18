"use client";
import React, { FC } from 'react';
import getStripePromise from '@/lib/stripe';
import toast from 'react-hot-toast';

const OrderProduct: FC<any> = ({ products }) => {

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

        toast.loading("Please Wait");

        const data = await response.json();

        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }

    };

    return (
        <button onClick={handleCheckOut}
            className="text-lg md:text-xl font-semibold px-3 py-6 mt-4 lg:mt-0 w-full rounded-lg text-white bg-black"
        >
            Check Out
        </button>
    )
};

export default OrderProduct;