import React from "react";
import OrderProduct from "@/Components/OrderProduct";
import ProductCart from "@/Components/ProductCart";
import { Trash2Icon } from "lucide-react";
// import { toast } from "react-hot-toast";

const getData = async () => {

    try {

        const res = await fetch("http://127.0.0.1:3000/api/cart", {
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

const Cart = async () => {

    const data: any = await getData();

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
                {data?.res.map((item: any) => (
                    <div key={item.id}
                        className="flex justify-between items-center m-3"
                    >
                        <ProductCart
                            item={item}
                        />
                        <div className="px-2">
                            <button>
                                <Trash2Icon />
                            </button>
                        </div>
                    </div>
                ))}
                <OrderProduct
                    products={data?.res}
                />
            </div>
        </>
    )
};

export default Cart;