"use client";
import React, { FC } from "react";
import OrderProduct from "@/Components/OrderProduct";
import { useRouter } from "next/navigation";
import { Trash2Icon } from "lucide-react";
import { toast } from "react-hot-toast";

const ProductCart: FC<any> = ({ item }) => {

    const { refresh } = useRouter();

    const handleDelete = async (id: number) => {

        const res = await fetch("/api/cart", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id })
        });

        const result = await res.json();

        toast.success("Product Delete");

        refresh();

        return result;

    };

    return (
        <div className="px-3">
            {item?.res.map((item: any,) => (
                <div
                    className="flex justify-between items-center m-3"
                    key={item.id}
                >
                    <div className="px-3">
                        <img
                            className="object-cover w-full rounded-lg h-full md:h-auto md:w-48 md:rounded-none"
                            src={item.image}
                            alt="products"
                        />

                        <div>
                            <h2 className="text-xl my-1 font-bold">
                                {item.title}
                            </h2>

                            <h3 className="text-2xl my-2 font-bold">
                                {item.price}
                            </h3>
                        </div>
                    </div>

                    <div className="px-2">
                        <button
                            onClick={() => handleDelete(item.id)}
                        >
                            <Trash2Icon />
                        </button>
                    </div>
                </div>
            ))}
            <OrderProduct
                products={item?.res}
            />
        </div>
    )
};

export default ProductCart;