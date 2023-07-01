"use client";
import GetProductCart from "@/Components/GetProductCart";
import { useRouter } from "next/navigation";

const getData = async () => {

    const { refresh } = useRouter();

    try {

        const res = await fetch("http://127.0.0.1:3000/api/cart", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            }
        });

        refresh();

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

    const data = await getData();

    if (!data?.res) {
        return (
            <div className="my-16 mx-12 sm:mx-24 flex justify-center items-center">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                    Empty Cart
                </h1>
            </div>
        );
    }

    const handleProductData = (productData: any) => {

        console.log(productData);
    };

    return (
        <>
            <div className="my-16 mx-12 sm:mx-24">
                {data?.res.map((item: any, i: number) => (
                    <div key={i}>
                        <GetProductCart
                            item={item}
                            onProductData={handleProductData}
                        />
                    </div>
                ))}

                <button
                    className="mt-8 mb-5 py-3 px-6 sm:py-4 sm:px-8 rounded bg-black text-xl sm:text-2xl text-white font-bold"
                    // onClick={handleCheckOut}
                >
                    Check Out
                </button>

            </div>
        </>
    )
};

export default Cart;