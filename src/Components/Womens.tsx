"use client";
import React, { FC } from 'react';
import { urlForImage } from '../../sanity/lib/image';
import Image from "next/image";
import { Image as IImage } from 'sanity';

interface Props {
    title: string;
    image: IImage;
    price: number;
    dresstype: string;
    category: string;
};

const Womens: FC<Props> = ({ image, title, price, dresstype, category }) => {

    return (
        <div
            className="py-4 px-6"
        >
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

            <h3 className="text-lg my-1 font-bold">
                $ {price}
            </h3>

            <div className="flex flex-col">
                <h3 className="uppercase text-gray-700 font-bold text-lg">
                    Category:
                </h3>

                <h3 className="font-bold text-lg">
                    {category}
                </h3>
            </div>

            <div className="flex flex-col">
                <h3 className="uppercase text-gray-700 font-bold text-lg">
                    Dress Type:
                </h3>

                <h3 className="font-bold text-lg">
                    {dresstype}
                </h3>
            </div>

            <button
                className="my-2 py-2 px-6 rounded bg-blue-700 text-white font-semibold"
            >
                Add To Cart
            </button>
        </div>
    )
};

export default Womens;