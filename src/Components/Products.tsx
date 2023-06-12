import React from "react";
import { client } from "@/lib/sanityClient";
import { Image } from "sanity";
import Slider from "./Slider";

export const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product"] {
        image,
      }
    `);

    return res;

};

interface IData {
    image: Image;
};

const Products = async () => {

    const data: IData[] = await getProductData();

    return (
        <div className="py-16 px-24">
            <div className="flex flex-col text-center gap-4 mb-8">
                <h3 className="text-[#2B00FF] font-semibold">PRODUCTS</h3>
                <h2 className="font-bold text-3xl">Check What We Have</h2>
            </div>

            <div className="carousel gap-8 mt-6 mb-3">
                {data.map((item, i: number) => (
                    <div key={i} className="carousel-item">
                        <Slider
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Products;