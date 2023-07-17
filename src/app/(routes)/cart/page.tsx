import React from "react";
import ProductCart from "@/Components/ProductCart";

const getCartData = async () => {

    try {

        const res = await fetch("http://127.0.0.1:3000/api/getcart", {
            method: "GET",
            cache: "no-store"
        });
console.log("status ",res.ok)
        if (!res.ok) {
            throw new Error("Failed to Fetch the Data")
        };

        const result = await res.json();
        console.log("Function Result ", result)

        return result;

    }
    catch (error) {

        console.log(error);

    }

};

const Cart = async () => {

    const data: any = await getCartData();
    console.log(data)
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
                <ProductCart
                    item={data}
                />
            </div>
        </>
    )
};

export default Cart;