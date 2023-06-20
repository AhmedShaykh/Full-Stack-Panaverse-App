import React from "react";
import Womens from "@/Components/Womens";
import { client } from "@/lib/sanityClient";
import { IProduct } from "../../../Types";

const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product" && category -> name == "Female"] {
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

const Female = async () => {

    const data: IProduct[] = await getProductData();

    return (
        <div className="my-16 mx-12 sm:mx-24 grid grid-cols-[repeat(1,auto)] xl:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(2,auto)] justify-around items-center gap-2 md:gap-4">
            {data?.map((item, i: number) => (
                <div key={i}>
                    <Womens
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

export default Female;