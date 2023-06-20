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
    <div className="my-16 mx-24 flex justify-center gap-x-12">
      
      <Image
        src={urlForImage(product.image).url()}
        alt="product"
        width={500}
        height={400}
        className="my-4 object-cover"
      />

      <div className="flex flex-col justify-center px-8">
        <h1 className="text-4xl my-1 font-bold">
          {product.title}
        </h1>

        <h3 className="font-bold text-2xl my-2 text-zinc-600">
          {product.dresstype.name}
        </h3>

        <div className="flex gap-x-12 my-4 items-center">
          <button
            className="my-2 p-3 rounded bg-black text-white font-semibold w-40"
          // onClick={addItems}
          >
            Add To Cart
          </button>

          <h2 className="text-3xl font-bold">
            ${product.price}.00
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Product;