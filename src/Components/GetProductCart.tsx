import React from "react";
import { client } from "@/lib/sanityClient";

const getProductById = async (id: any) => {

    const res = await client.fetch(`
      *[_type == "product" && _id == "${id}"][0] {
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

const GetProductCart = async ({ item }: any) => {

    const product = await getProductById(item.product_id);

    return (
        <div>
            <h1>
                {product.title}
            </h1>
        </div>
    )
};

export default GetProductCart;