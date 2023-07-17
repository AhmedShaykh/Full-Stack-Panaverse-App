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
        <div className="px-3">
            {item?.res.map((item: any,) => (
                <div
                    className="flex flex-col md:flex-row justify-between items-center m-3"
                    key={item.id}
                >
                    <div className="px-2 py-6 flex flex-col md:flex-row">
                        <img
                            className="object-cover w-full rounded-lg h-auto md:w-60 md:rounded-none"
                            src={item.image}
                            alt="products"
                        />

                        <div className="px-0 py-3 md:px-6 md:py-0 flex flex-col justify-center">
                            <h2 className="text-2xl my-2 font-bold">
                                {item.title}
                            </h2>

                            <h2 className="text-xl my-4 font-bold">
                                $ {item.price}
                            </h2>

                            <h2 className="text-xl my-2 font-bold">
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