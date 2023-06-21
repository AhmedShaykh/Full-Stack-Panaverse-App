import React from "react";
import AllProducts from "@/Components/AllProducts";
import { client } from "@/lib/sanityClient";
import { IProduct } from "../../../Types";

const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product"] {
        _id,
        title,
        image,
        price,
        dresstype -> {
            name
        }
      }
    `);

    return res;
};

const Products = async () => {

    const data: IProduct[] = await getProductData();

    return (
        <div className="my-16 mx-12 sm:mx-24 grid justify-center grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((item, i: number) => (
                <div key={i}>
                    <AllProducts
                        id={item._id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        dresstype={item.dresstype.name}
                    />
                </div>
            ))}
        </div>
    )
};

export default Products;