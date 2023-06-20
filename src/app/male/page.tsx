import React from "react";
import Mens from "@/Components/Mens";
import { client } from "@/lib/sanityClient";
import { IProduct } from "../../../Types";

const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product" && category -> name == "Male"] {
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

const Male = async () => {

    const data: IProduct[] = await getProductData();

    return (
        <div className="my-16 mx-12 sm:mx-24 grid grid-cols-[repeat(3,auto)] justify-center gap-x-10 gap-y-12">
            {data?.map((item, i: number) => (
                <div key={i}>
                    <Mens
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

export default Male;