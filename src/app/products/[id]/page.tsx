import React from "react";
import { client } from "@/lib/sanityClient";
import { Image } from "sanity";
interface Props {
  params: {
    id: string;
  }
};

const getProducts = async (id: string) => {

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

const Product = async ({ params: { id } }: Props) => {

  const product: IProduct[] = await getProducts(id);

  return (
    <div className="my-16 mx-24">
      {product?.map((item, i: number) => (
        <div key={i}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Product;