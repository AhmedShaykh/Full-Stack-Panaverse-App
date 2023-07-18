"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { urlForImage } from "../../sanity/lib/image";
import toast from "react-hot-toast";
import { Minus, Plus } from "lucide-react";

const AddProduct: FC<any> = ({ id, product }) => {

    const [count, setCount] = useState<number>(1);

    const { refresh } = useRouter();

    const handleAddToCart = async () => {

        const res = await fetch("/api/addcart", {
            method: "POST",
            body: JSON.stringify({
                product_id: id,
                title: product.title,
                image: urlForImage(product.image).url(),
                price: product.price,
                quantity: count
            })
        });

        const result = await res.json();

        toast.success("New Product Added");

        setCount(1);

        refresh();

        return result;

    };

    return (
        <div className="wrapper">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                    className="lg:w-1/2 w-full lg:h-[60%] h-[80%] object-cover object-center rounded"
                    src={urlForImage(product.image).url()}
                    alt="products"
                />

                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-12 lg:mt-2 px-1">
                    <h1 className="text-gray-900 text-3xl font-bold mb-1">
                        {product.title}
                    </h1>

                    <h2 className="leading-relaxed font-bold text-2xl my-2 text-zinc-600">
                        {product.dresstype.name}
                    </h2>

                    <div className="flex mt-6 items-center pb-5 mb-5">
                        <div className="flex items-center">

                            <span className="mr-8">Size</span>

                            <div className="relative">
                                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-zinc-700 text-base pl-3 pr-10">
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>

                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-x-12 my-4 items-center">
                        <h2 className="text-xl font-bold">
                            Quantity:
                        </h2>

                        <div className="flex items-center justify-center space-x-4">
                            <button
                                className="rounded-full p-1 bg-zinc-900 text-white"
                                onClick={() => {
                                    if (count < 8) {
                                        setCount(count + 1);
                                    } else {
                                        toast("Sorry Item Limit Is 8", { icon: "🙃" })
                                    }
                                }}
                            >
                                <Plus />
                            </button>

                            <span className="text-xl font-semibold">
                                {count}
                            </span>

                            <button
                                className="rounded-full p-1 bg-zinc-900 text-white"
                                onClick={() => {
                                    if (count > 1) {
                                        setCount(count - 1);
                                    } else {
                                        toast("Item Less Limit Is 1", { icon: "⚠️" })
                                    }
                                }}
                            >
                                <Minus />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-x-8 my-4 items-center">
                        <button
                            className="my-2 p-3 rounded bg-black text-white font-semibold w-40"
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>

                        <h2 className="text-3xl font-bold">
                            ${product.price}.00
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddProduct;