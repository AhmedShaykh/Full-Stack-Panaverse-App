"use client";
import { useAppSelector } from "@/redux/store";
import ProductCart from "./ProductCart";

const CartPage = () => {

    const cartItems = useAppSelector((state) => state.cart.items);

    const totalItems = useAppSelector((state) => state.cart.totalQuantity);

    const totalPrice = useAppSelector((state) => state.cart.totalAmount);

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

            <div className="flex flex-col items-center justify-between gap-5">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <p>Quantity</p>
                    </div>
                    <div>
                        <p>{totalItems}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div>
                        <p>Total Amount</p>
                    </div>
                    <div>
                        <p>${totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartPage;