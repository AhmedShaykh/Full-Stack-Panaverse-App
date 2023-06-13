import React from "react";
import Womens from "@/Components/Womens";
import { client } from "@/lib/sanityClient";
import { Image } from "sanity";

export const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product" && category -> name == "Female"] {
        title,
        image,
        price,
        category -> {
            name
        },
        dresstype -> {
            name
        }
      }
    `);

    return res;
};

interface IProduct {
    title: string;
    image: Image;
    price: number;
    category: {
        name: string;
    }
    dresstype: {
        name: string;
    }
};

const Female = async () => {

    const data: IProduct[] = await getProductData();

    return (
        <div className="my-8 grid grid-cols-[repeat(3,auto)] justify-center gap-x-10 gap-y-12">
            {data?.map((item, i: number) => (
                <div key={i}>
                    <Womens
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        category={item.category.name}
                        dresstype={item.dresstype.name}
                    />
                </div>
            ))}
        </div>
    )
};

export default Female;