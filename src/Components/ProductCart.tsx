"use client";
import React, { FC } from "react";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const ProductCart: FC<any> = ({ item }) => {

    const { refresh } = useRouter();

    const handleData = async (id: number) => {

        try {

            const res = await fetch("/api/cart", {
                method: "DELETE",
                body: JSON.stringify({ id: id })
            });

            if (!res.ok) {
                throw new Error("Failed to Delete the Data")
            };

            toast.success("Product Successfully Deleted");

            refresh();

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <div className="flex justify-between items-center m-3">
            <div className="px-3">
                <img
                    className="object-cover w-full rounded-lg h-full md:h-auto md:w-48 md:rounded-none"
                    src={item.image}
                    alt="products"
                />

                <div className="">
                    <h2 className="text-xl my-1 font-bold">
                        {item.title}
                    </h2>

                    <h3 className="text-2xl my-2 font-bold">
                        {item.price}
                    </h3>
                </div>
            </div>
            <div className="px-2">
                <button onClick={() => handleData(item.id)}>
                    <Trash2Icon />
                </button>
            </div>
        </div>
    )
};

export default ProductCart;