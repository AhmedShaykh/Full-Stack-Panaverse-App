"use client";
import { useAppSelector } from "@/redux/store";
import ProductCart from "./ProductCart";

const CartPage = () => {

    const cartItems = useAppSelector((state) => state.cart.items);

    const totalItems = useAppSelector((state) => state.cart.totalQuantity);

    const totalPrice = useAppSelector((state) => state.cart.totalAmount);

    console.log(cartItems);

    if (cartItems.length === 0) {
        return (
            <div className="wrapper flex justify-center items-center">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                    Empty Cart
                </h1>
            </div>
        );
    }

    return (
        <div className="wrapper">
            {cartItems.map((item) => (
                <ProductCart
                    key={item._id}
                    item={item}
                />
            ))}
        </div>
    )
};

export default CartPage;