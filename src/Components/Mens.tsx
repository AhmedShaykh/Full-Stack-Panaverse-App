"use client";
import React, { FC } from "react";
import { urlForImage } from "../../sanity/lib/image";
import { Props } from "../../Types";
import Image from "next/image";
import Link from "next/link";

const Mens: FC<Props> = ({ id, image, title, price, dresstype }) => {
    return (
        <div
            className="py-4 px-6"
        >
            <Link href={`products/${id}`}>
                <Image
                    src={urlForImage(image).url()}
                    alt="product"
                    width={300}
                    height={300}
                    className="my-4 object-cover max-h-[300px]"
                />

                <h2 className="text-xl my-1 font-bold">
                    {title}
                </h2>

                <h3 className="font-bold text-lg my-2">
                    {dresstype}
                </h3>

                <h3 className="text-2xl my-4 font-bold">
                    $ {price}
                </h3>
            </Link>
        </div>
    )
};

export default Mens;