import React from "react";
import { BsBagCheckFill } from 'react-icons/bs';

const OrderSuccess = () => {
    return (
        <div className="my-16 mx-12 sm:mx-24 flex flex-col justify-center items-center">

            <div className="flex justify-center items-center mb-8 mt-4">
                <BsBagCheckFill
                    className="text-[#008000]"
                    size={80}
                />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                Thank you for your order!
            </h1>
        </div>
    )
};

export default OrderSuccess;