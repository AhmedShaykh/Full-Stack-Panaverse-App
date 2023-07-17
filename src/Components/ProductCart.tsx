"use client";
import React, { FC } from "react";
import OrderProduct from "@/Components/OrderProduct";
import { useRouter } from "next/navigation";
import { Trash2Icon } from "lucide-react";
import { toast } from "react-hot-toast";

const ProductCart: FC<any> = ({ item }) => {

    const { refresh } = useRouter();

    const handleDelete = async (id: number) => {

        const res = await fetch(`/api/deletecart?id=${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await res.json();

        toast.success("Product Delete");

        refresh();

        return result;

    };

    return (
        <div className="px-0 lg:px-3">
            {item?.res.map((item: any,) => (
                <div
                    className="flex flex-col md:flex-row justify-between items-center m-1 lg:m-3"
                    key={item.id}
                >
                    <div className="px-2 py-6 flex flex-col lg:flex-row">
                        <img
                            className="object-cover w-80 rounded-lg h-80 lg:h-60 lg:w-60 lg:rounded-none"
                            src={item.image}
                            alt="products"
                        />

                        <div className="px-0 py-3 lg:px-6 lg:py-4">
                            <h2 className="text-2xl my-2 font-bold">
                                {item.title}
                            </h2>

                            <h2 className="text-xl my-4 font-bold">
                                $ {item.price}
                            </h2>

                            <h2 className="text-xl mt-6 lg:last:mt-12 mb-2 font-bold">
                                Quantity: {" "}

                                <span className="text-xl my-2 font-bold">
                                    {item.quantity}
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="px-2">
                        <button
                            onClick={() => handleDelete(item.id)}
                        >
                            <Trash2Icon className="hover:text-red-700" />
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