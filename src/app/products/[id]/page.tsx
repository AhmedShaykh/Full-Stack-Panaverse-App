import React from "react";
import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  }
};

const getProductById = async (id: any) => {

  const res = await client.fetch(`
    *[_type == "product" && _id == '${id}'][0] {
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

const Product = async ({ params }: any) => {

  const { id } = params;

  const product: any = await getProductById(id);

  return (
    <div className="my-16 mx-24">
      <h1>
        {product.title}
      </h1>
      <h2>
        {product.price}
      </h2>
      <Image
        src={urlForImage(product.image).url()}
        alt="product"
        width={300}
        height={300}
        className="my-4 object-cover max-h-[300px]"
      />
    </div>
  );
};

export default Product;