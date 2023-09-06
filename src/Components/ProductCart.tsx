"use client";
import React, { FC, useState } from "react";
import OrderProduct from "@/Components/OrderProduct";
import { cartActions } from "@/redux/features/cartSlice";
import { urlForImage } from "../../sanity/lib/image";
import { useAppDispatch } from "@/redux/store";
import getDomain from "@/lib/getDomain";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2Icon } from "lucide-react";
import { toast } from "react-hot-toast";

const ProductCart: FC<any> = ({ item }) => {

    const [qty, setQty] = useState(item.quantity);

    const dispatch = useAppDispatch();

    console.log(item.id);

    const handleCart = async (newQty: number) => {

        const newPrice = item.price * newQty;

        try {

            if (newQty) {

                const res = await fetch(`${getDomain}/api/updatecart`, {
                    method: "PUT",
                    body: JSON.stringify({
                        product_id: item._id,
                        quantity: newQty,
                        price: newPrice,
                    }),
                });

                if (!res.ok) {

                    throw new Error("Failed To Update Data");

                } else {

                    throw new Error("Failed To Fetch Update");

                }
            }

        } catch (error) {

            console.log((error as { message: string }).message);

        }

    };

    const handleDelete = async () => {

        await fetch(`/api/deletecart/removeitem/${item._id}`, {
            method: "DELETE",
        });

    };

    const increament = () => {

        if (item.quantity < 8) {

            toast.promise(handleCart(qty + 1), {
                loading: "Please Wait...",
                success: "Product Quantity Update",
                error: "Failed To Quanity Update"
            });

            setQty(qty + 1);

            dispatch(cartActions.addToCart({ product: item, quantity: 1 }));
        }
    };

    const decreament = () => {

        if (item.quantity > 1) {
            toast.promise(handleCart(qty - 1), {
                loading: "Please Wait...",
                success: "Product Quantity Update",
                error: "Failed To Quanity Update"
            });

            setQty(qty - 1);

            dispatch(cartActions.removeFromCart(item._id));
        }
    };

    const deleteProduct = () => {

        toast.promise(handleDelete(), {
            loading: "Please Wait...",
            success: "Product Delete",
            error: "Failed to Product Delete"
        });

        dispatch(cartActions.removeProduct(item._id));
    };

    return (
        <div className="px-0 lg:px-3">
            <div
                className="flex flex-col md:flex-row justify-between items-center m-1 lg:m-3">
                <div className="px-2 py-6 flex flex-col lg:flex-row">
                    <img
                        className="object-cover w-80 rounded-lg h-80 lg:h-60 lg:w-60 lg:rounded-none"
                        src={urlForImage(item.image).url()}
                        alt="products"
                    />

                    <div className="px-0 py-3 lg:px-6 lg:py-4">
                        <h2 className="text-2xl my-2 font-bold">
                            {item.title}
                        </h2>

                        <h2 className="text-xl my-4 font-bold">
                            $ {item.price * item.quantity}
                        </h2>

                        <div className="flex gap-x-8 items-center text-xl mt-6 lg:last:mt-12 mb-2 font-bold">
                            <h2 className="text-xl font-bold">
                                Quantity:
                            </h2>

                            <div className="flex items-center justify-center space-x-4">
                                <button
                                    className="rounded-full p-1 bg-zinc-900 text-white"
                                    onClick={increament}
                                >
                                    <Plus />
                                </button>

                                <span className="text-xl my-2 font-bold">
                                    {qty}
                                </span>

                                <button
                                    className="rounded-full p-1 bg-zinc-900 text-white"
                                    onClick={decreament}
                                >
                                    <Minus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-2">
                    <button
                        onClick={deleteProduct}
                    >
                        <Trash2Icon className="hover:text-red-700" />
                    </button>
                </div>
            </div>
            {/* <OrderProduct
                products={item}
            /> */}
        </div>
    )
};

export default ProductCart;