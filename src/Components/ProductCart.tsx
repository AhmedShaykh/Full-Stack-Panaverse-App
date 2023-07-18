"use client";
import React, { FC, useState } from "react";
import OrderProduct from "@/Components/OrderProduct";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2Icon } from "lucide-react";
import { toast } from "react-hot-toast";

const ProductCart: FC<any> = ({ item }) => {

    const data = item?.res.map((data: any) => data.quantity)

    const [count, setCount] = useState<number>(data);

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

    const handleUpdatePlus = async (id: number) => {

        setCount(count + 1);

        const res = await fetch(`/api/updatecart?id=${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: count
            })
        });

        const result = await res.json();

        toast.success("Quanity Update");

        refresh();

        return result;

    };

    const handleUpdateMinus = async (id: number) => {

        setCount(count - 1);

        const res = await fetch(`/api/updatecart?id=${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: count
            })
        });

        const result = await res.json();

        toast.success("Quanity Update");

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

                            <div className="flex gap-x-12 items-center text-xl mt-6 lg:last:mt-12 mb-2 font-bold">
                                <h2 className="text-xl font-bold">
                                    Quantity:
                                </h2>

                                <div className="flex items-center justify-center space-x-4">
                                    <button
                                        className="rounded-full p-1 bg-zinc-900 text-white"
                                        // onClick={() => {
                                        //     if (count < 8) {
                                        //         setCount(count + 1);
                                        //     } else {
                                        //         toast("Sorry Item Limit Is 8", { icon: "🙃" })
                                        //     }
                                        // }}
                                        onClick={() => handleUpdatePlus(item.id)}
                                    >
                                        <Plus />
                                    </button>

                                    <span className="text-xl my-2 font-bold">
                                        {item.quantity}
                                    </span>

                                    <button
                                        className="rounded-full p-1 bg-zinc-900 text-white"
                                        // onClick={() => {
                                        //     if (count > 1) {
                                        //         setCount(count - 1);
                                        //     } else {
                                        //         toast("Item Less Limit Is 1", { icon: "⚠️" })
                                        //     }
                                        // }}
                                        onClick={() => handleUpdateMinus(item.id)}
                                    >
                                        <Minus />
                                    </button>
                                </div>
                            </div>

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