"use client";
import React, { FC } from "react";
import { urlForImage } from "../../sanity/lib/image";
import { Props } from "../../Types";
import Link from "next/link";

const Womens: FC<Props> = ({ id, image, title, price, dresstype }) => {
    return (
        <div
            className="p-4 lg:p-6"
        >
            <Link href={`product/${id}`}>
                <img
                    className="w-full lg:h-[60%] h-[80%] object-cover object-center rounded my-4"
                    src={urlForImage(image).url()}
                    alt="products"
                />

                <h2 className="text-xl my-1 font-bold">
                    {title}
                </h2>

                <h3 className="font-bold text-lg my-2 text-zinc-600">
                    {dresstype}
                </h3>

                <h3 className="text-2xl my-2 font-bold">
                    $ {price}
                </h3>
            </Link>
        </div>
    )
};

export default Womens;