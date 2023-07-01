import React from "react";
import { client } from "../../../../sanity/lib/client";

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

const getProductById = async (id: any) => {

    const res = await client.fetch(`
      *[_type == "product" && _id == "${id}"][0] {
        title,
        image,
        price,
        dresstype -> {
          name
        }
      }
    `);

    console.log(res.title);

    return res;
};

const Cart = async () => {

    const data = await getData();

    const products = data?.res.map((item: any) => {
        return item.product_id;
    });

    if (!products) {
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
                {products?.map((item: any, i: number) => {
                    <div key={i}>
                        {getProductById(item)}
                    </div>
                })}
            </div>
        </>
    )
};

export default Cart;