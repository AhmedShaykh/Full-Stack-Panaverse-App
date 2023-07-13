import React from "react";
import ProductCart from "@/Components/ProductCart";
import { getCartData } from "@/Services/getAPI";

const Cart = async () => {

    const data: any = await getCartData();

    if (data?.res == 0) {
        return (
            <div className="wrapper flex justify-center items-center">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                    Empty Cart
                </h1>
            </div>
        );
    }

    return (
        <>
            <div className="wrapper">
                <ProductCart item={data} />
            </div>
        </>
    )
};

export default Cart;