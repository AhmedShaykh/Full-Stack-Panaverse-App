import React, { FC } from "react";

const ProductCart: FC<any> = ({ item }) => {
    return (
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
    )
};

export default ProductCart;