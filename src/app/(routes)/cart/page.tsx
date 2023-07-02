"use client";
import { useState } from "react";
import { useCookies } from "react-cookie";

const Cart = async () => {

    const [trash, setTrash] = useState<any>(false);

    const [cookies, setCookies] = useCookies(['products']);

    const products = cookies.products || [];

    console.log(products);

    return (
        <>
            <div className="my-16 mx-12 sm:mx-24">
                {products?.length > 0 ? (
                    <div className="my-16 mx-12 sm:mx-24">
                        {/* {product?.map((item: any, i: number) => {
                            console.log('Item:', item); // Check the item structure
                            return (
                                <div key={i}>
                                    <h1>{item.title}</h1>
                                </div>
                            );
                        })} */}
                    </div>
                ) : (
                    <div className="my-16 mx-12 sm:mx-24 flex justify-center items-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                            Empty Cart
                        </h1>
                    </div>
                )}
            </div>
        </>
    )
};

export default Cart;