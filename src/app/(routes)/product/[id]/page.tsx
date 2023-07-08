"use client";
import { client } from "@/lib/sanityClient";
import AddProduct from "@/Components/AddProduct";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { urlForImage } from "../../../../../sanity/lib/image";

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

  const { refresh } = useRouter();

  const product: any = await getProductById(id);

  const handleAddToCart = async () => {

    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: id,
        title: product.title,
        image: urlForImage(product.image).url(),
        price: product.price
      })
    });

    const result = await res.json();

    toast.success("New Product Added");

    refresh();

    return result;

  };

  return (
    <>
      <AddProduct
        product={product}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

export default Product;