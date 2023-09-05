import React from "react";
import { client } from "@/lib/sanityClient";
import AddProduct from "@/Components/AddProduct";
import { ProductData } from "../../../../../Types";
import { auth } from "@clerk/nextjs";

type Prop = {
  params: {
    id: string;
  };
};

const getProductById = async (id: string) => {

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

const Product = async ({ params }: Prop) => {

  const { userId } = auth();

  const { id } = params;

  const product: ProductData = await getProductById(id);

  return (
    <>
      <AddProduct
        id={id}
        count={1}
        userId={userId as string}
        product={product}
      />
    </>
  );
};

export default Product;