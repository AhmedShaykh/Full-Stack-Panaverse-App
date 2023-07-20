"use client";
import React, { FC } from 'react';
import getStripePromise from '@/lib/stripe';
import toast from 'react-hot-toast';

const OrderProduct: FC<any> = ({ products }) => {

    const clearData = async () => {

        try {

            const res = await fetch("http://127.0.0.1:3000/api/clearcart", {
                method: "GET",
                cache: "no-store"
            });

            if (!res.ok) {
                throw new Error("Failed to Fetch the Data")
            };

            const result = await res.json();

            return result;

        }
        catch (error) {

            console.log(error);

        }
    };

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

        toast.loading("Please Wait...");

        const data = await response.json();

        if (data.session) {

            stripe?.redirectToCheckout({ sessionId: data.session.id });

            clearData();

        }

    };

    return (
        <button
            className="text-lg md:text-xl font-semibold px-3 py-6 mt-4 lg:mt-0 w-full rounded-lg text-white bg-black"
            onClick={handleCheckOut}
        >
            Check Out
        </button>
    )
};

export default OrderProduct;