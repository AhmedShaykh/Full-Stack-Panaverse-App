import React from "react";
import { client } from "@/lib/sanityClient";
import Slider from "./Slider";
import { IData } from "../../Types";

const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product"] {
        _id,
        image,
      }
    `);

    return res;

};

const Products = async () => {

    const data: IData[] = await getProductData();

    return (
        <div className="wrapper">
            <div className="flex flex-col text-center gap-4 mb-8">
                <h3 className="text-[#2B00FF] font-semibold">PRODUCTS</h3>
                <h2 className="font-bold text-3xl">Check What We Have</h2>
            </div>

            {/* <div className="carousel gap-6 mt-6 mb-3">
                {data?.map((item, i: number) => (
                    <div key={i} className="carousel-item">
                        <Slider
                            id={item._id}
                            image={item.image}
                        />
                    </div>
                ))}
            </div> */}
        </div>
    )
};

export default Products;