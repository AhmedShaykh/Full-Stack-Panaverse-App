"use client";
import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../../../../sanity/lib/image";
import toast from "react-hot-toast";
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

  const handleAddToCart = async () => {

    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: id
      })
    });

    const result = await res.json();

    toast.success("New Product Added");

    console.log(result);
  };

  return (
    <>
      <AddProduct
        image={urlForImage(product.image).url()}
        title={product.title}
        dresstype={product.dresstype.name}
        price={product.price}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

export default Product;