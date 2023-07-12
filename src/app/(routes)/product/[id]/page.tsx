import React from "react";
import { client } from "@/lib/sanityClient";
import AddProduct from "@/Components/AddProduct";

const getProductById = async (id: any) => {

  const res = await client.fetch(`
    *[_type == "product" && _id == '${id}'][0] {
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

const Product = async ({ params }: any) => {

  const { id } = params;

  const product: any = await getProductById(id);

  return (
    <>
      <AddProduct
        id={id}
        product={product}
      />
    </>
  );
};

export default Product;