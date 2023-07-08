import React, { FC } from "react";

const ProductCart: FC<any> = ({ item }) => {
    return (
        <div className="p-4 my-4 flex flex-col items-center border border-gray-800 rounded-lg shadow md:flex-row">
            <img
                className="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none"
                src={item.image}
                alt="products"
            />

            <div className="flex flex-col justify-between p-4 leading-normal">
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