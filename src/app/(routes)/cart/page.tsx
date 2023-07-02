"use client";
import { useCookies } from "react-cookie";
import GetProductCart from "@/Components/GetProductCart";
import toast from "react-hot-toast";
import OrderProduct from "@/Components/OrderProduct";
import { BiTrash } from "react-icons/bi";

const Cart = async () => {

    const [cookies, setCookies] = useCookies(['products']);

    const products = cookies.products || [];

    const handleDelete = (id: any) => {

        const updatedProducts = products.filter((p: any) => p.id !== id);

        setCookies("products", updatedProducts);

        toast.success("Product Delete!");

    };

    return (
        <>
            <div className="my-16 mx-12 sm:mx-24">
                {products?.length > 0 ? (
                    <div className="my-16 mx-12 sm:mx-24">
                        {/* {products?.map((item: any) => (
                            <div key={item.id}>
                                <GetProductCart
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                                <div className="flex flex-col justify-end w-full p-2">
                                    <button onClick={() => handleDelete(item.id)} className="flex justify-end items-start p-4">
                                        <BiTrash />
                                    </button>
                                </div>
                            </div>
                        ))} */}
                        <OrderProduct products={products} />
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