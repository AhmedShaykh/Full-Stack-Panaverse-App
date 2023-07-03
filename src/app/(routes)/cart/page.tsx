"use client";
import { useCookies } from "react-cookie";
import OrderProduct from "@/Components/OrderProduct";
import GetProductCart from "@/Components/GetProductCart";
// import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Cart = async () => {

    const [cookies, setCookie] = useCookies(['products']);

    const products = cookies.products || [];

    // useEffect(() => {

    //     console.log(products);

    // }, [products]);

    // const { refresh } = useRouter();

    const handleDelete = (productId: number) => {

        const updatedProducts = products.filter((item: any) => item.id !== productId);

        setCookie('products', updatedProducts);

        toast.success("Delete Product");

        // refresh();
    };

    return (
        <>
            <div>
                {products?.length > 0 ? (
                    <div className="my-16 mx-12 sm:mx-24">
                        {products?.map((item: any) => (
                            <div className="flex justify-between items-center my-3">
                                <div
                                    key={item.id}
                                    className="w-[85%]"
                                >
                                    <GetProductCart
                                        item={item}
                                    />
                                </div>
                                <button onClick={() => handleDelete(item.id)}>
                                    <Trash className="text-black" />
                                </button>
                            </div>
                        ))}
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