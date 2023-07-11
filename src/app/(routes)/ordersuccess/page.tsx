"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsBagCheckFill } from 'react-icons/bs';

const OrderSuccess = () => {

    const router = useRouter();

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
                onClick={() => router.push("/")}
            >
                Continue Shopping
            </button>
        </div>
    )
};

export default OrderSuccess;