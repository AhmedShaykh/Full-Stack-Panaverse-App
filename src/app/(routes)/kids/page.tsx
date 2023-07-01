import React from "react";
import Kid from "@/Components/Kid";
import { client } from "@/lib/sanityClient";
import { IProduct } from "../../../../Types";

const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product" && category -> name == "Kids"] {
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

const Kids = async () => {

    const data: IProduct[] = await getProductData();

    return (
        <>
            {data.length > 0 ? (
                <div className="my-16 mx-12 sm:mx-24 grid justify-center grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    {data?.map((item, i: number) => (
                        <div key={i}>
                            <Kid
                                id={item._id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                dresstype={item.dresstype.name}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="my-16 mx-12 sm:mx-24 flex justify-center items-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                        No Products Found
                    </h1>
                </div>
            )}
        </>
    )
};

export default Kids;