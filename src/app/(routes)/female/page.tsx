import React from "react";
import Womens from "@/Components/Womens";
import { client } from "@/lib/sanityClient";
import { IProduct } from "../../../../Types";

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
        <div className="wrapper grid justify-center grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
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