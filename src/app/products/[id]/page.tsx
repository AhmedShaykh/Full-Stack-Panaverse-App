import React from "react";
import { client } from "@/lib/sanityClient";

type Props = {
  params: {
    id: string;
  }
};

const Product = async({ params: { id } }: Props) => {

  // const res = await client.fetch(`
  //     *[_type == "product" && _id = ${id}] {
  //       title,
  //       image,
  //       price,
  //       category {
  //         name
  //       },
  //       dresstype {
  //         name
  //       }
  //     }
  //   `);

  // console.log(res);

  return (
    <div className="my-16 mx-24">
      {/* <h1>{product!.title}</h1>
      {/* <img src={product.image} /> */}
      {/* <p>Price: ${product!.price}</p> */}
      {/* <p>Category: {product.category.name}</p>
          <p>Dresstype: {product.dresstype.name}</p> */}
    </div>
  );
};

export default Product;