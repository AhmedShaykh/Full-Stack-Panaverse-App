import React, { FC } from "react";
import { client } from "@/lib/sanityClient";
import ProductCart from "./ProductCart";
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

  console.log(data);

  return (
    <>
      <ProductCart
        image={urlForImage(data.image).url()}
        title={data.title}
        price={data.price}
      />
    </>
  )
};

export default GetProductCart;