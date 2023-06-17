"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/lib/sanityClient";
import { Image } from "sanity";

interface Props {
  params: {
    id: string;
  };
}

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
  };
  dresstype?: { // Make this optional since it's not always present in the response
    name?: string;
  };
}

const Product = ({ params }: Props) => {

  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const productData = await getProducts(params.id);
        setProduct(productData);

      } catch (error) {

        console.error(error);
      }

    };

    fetchData();

  }, [params.id]);

  if (!product) return <div className="my-16 mx-24">Loading...</div>;

  return (
    <div className="my-16 mx-24">
      <h1>{product.title}</h1>
    </div>
  );
};

export default Product;