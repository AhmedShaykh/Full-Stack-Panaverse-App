import React, { FC } from "react";
import { client } from "@/lib/sanityClient";
import OrderProduct from "@/Components/OrderProduct";
import ProductCart from "@/Components/ProductCart";
import { urlForImage } from "../../../../sanity/lib/image";

const getData = async () => {

    try {

        const res = await fetch("http://127.0.0.1:3000/api/cart", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            }
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

const GetProductCart: FC<any> = async ({ item }) => {

    return (
        <>
            {/* <ProductCart
                image={urlForImage(dataCart.image).url()}
                title={dataCart.title}
                price={dataCart.price}
            /> */}
        </>
    )
};

const Cart = async () => {

    const data: any = await getData();

    if (!data?.res) {
        return (
            <div className="my-16 mx-12 sm:mx-24 flex justify-center items-center">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                    Empty Cart
                </h1>
            </div>
        );
    }

    return (
        <>
            <div className="my-16 mx-12 sm:mx-24">
                {data?.res.map((item: any, i: number) => (
                    <div key={i}>
                        <GetProductCart
                            item={item}
                        />
                    </div>
                ))}
                <OrderProduct products={data?.res} />
            </div>
        </>
    )
};

export default Cart;