"use client";
import { client } from "@/lib/sanityClient";
import React, { FC } from "react";

const getProductById = async (title: any) => {

    const res = await client.fetch(`
      *[_type == "product" && title == "${title}"][0] {
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

const GetProductCart: FC<any> = async ({ item }) => {

    const data = await getProductById(item.title);

    return (
        <div>
            <h1>
                {data.title}
            </h1>
        </div>
    )
};

export default GetProductCart;