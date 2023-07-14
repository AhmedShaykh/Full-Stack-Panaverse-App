"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsBagCheckFill } from 'react-icons/bs';

const OrderSuccess = () => {

    const router = useRouter();

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

    const handleClick = async () => {

        await router.push("/");

        await clearData();

    };

    return (
        <div className="wrapper flex flex-col justify-center items-center">

            <div className="flex justify-center items-center mb-8 mt-4">
                <BsBagCheckFill
                    className="text-[#008000]"
                    size={80}
                />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                Thank you for your order!
            </h1>

            <button
                className="mt-8 mb-5 py-3 px-6 sm:py-4 sm:px-8 rounded bg-black text-xl sm:text-2xl text-white font-bold"
                onClick={handleClick}
            >
                Continue Shopping
            </button>
        </div>
    )
};

export default OrderSuccess;