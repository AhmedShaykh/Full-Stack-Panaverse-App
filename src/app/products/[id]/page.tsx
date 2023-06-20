// "use client";
import React from "react";
import { client } from "@/lib/sanityClient";
// import { cartActions } from "@/Store/slice/CartSlice";
// import { useDispatch } from "react-redux";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
// import toast from "react-hot-toast";

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

  // const dispatch = useDispatch();

  // const addItems = () => {
  //   dispatch(cartActions.addToCart({
  //     quantity: 1
  //   }));
  //   toast.success("Product Added")
  // };

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

      <button
        className="my-2 py-2 px-6 rounded bg-blue-700 text-white font-semibold"
      // onClick={addItems}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;