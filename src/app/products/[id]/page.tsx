import React from "react";
import { client } from "@/lib/sanityClient";

const getProductById = async (id: string) => {
  const res = await client.fetch(`
    *[_type == "product" && _id == ${id}] {
      title,
      image,
      price,
      category {
        name
      },
      dresstype {
        name
      }
    }
  `);

  return res[0];
};

const Product = () => {
  return (
    <div className="my-16 mx-24">
      <h1>Dynamic</h1>
    </div>
  );
};

export default Product;