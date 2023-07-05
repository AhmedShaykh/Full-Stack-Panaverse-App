"use client";
import React, { FC } from "react";
import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../sanity/lib/image";

const getProductById = async (id: any) => {

  const res = await client.fetch(`
      *[_type == "product" && _id == "${id}"][0] {
        title,
        image,
        price
      }
    `);

  return res;

};

const GetProductCart: FC<any> = async ({ item }) => {

  const data = await getProductById(item.product_id);

  return (
    <div className="p-4 my-4 flex flex-col items-center border border-gray-800 rounded-lg shadow md:flex-row">
      <img
        className="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none"
        src={urlForImage(data.image).url()}
        alt="products"
      />

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="text-xl my-1 font-bold">
          {data.title}
        </h2>

        <h3 className="text-2xl my-2 font-bold">
          $ {data.price}
        </h3>
      </div>
    </div>
  )
};

export default GetProductCart;