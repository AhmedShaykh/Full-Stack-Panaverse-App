"use client";
import { useCookies } from "react-cookie";
import OrderProduct from "@/Components/OrderProduct";
import GetProductCart from "@/Components/GetProductCart";
import { useRouter } from "next/navigation";

const Cart = async () => {

    const [cookies, setCookie] = useCookies(['products']);

    const products = cookies.products || [];

    const { refresh } = useRouter();

    const handleDelete = (productId: number) => {

        const updatedProducts = products.filter((item: any) => item.id !== productId);

        setCookie('products', updatedProducts);

        refresh();

    };

    return (
        <>
            <div>
                {products?.length > 0 ? (
                    <div className="my-16 mx-12 sm:mx-24">
                        {products?.map((item: any) => (
                            <div key={item.id}>
                                <GetProductCart
                                    item={item}
                                />
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
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