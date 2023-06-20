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
        <div className="my-16 mx-12 sm:mx-24 grid grid-cols-[repeat(1,auto)] xl:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(2,auto)] justify-around items-center gap-2 md:gap-4">
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