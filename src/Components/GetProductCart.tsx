"use client";
import React from "react";
import { client } from "@/lib/sanityClient";
import getStipePromise from "@/lib/stripe";

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

  const handleCheckOut = async () => {

    const stripe = await getStipePromise();

    const response = await fetch("/api/stripe/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      cache: "no-cache",
      body: JSON.stringify(product)
    });

    const data = await response.json();

    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }

  };

  return (
    <div>
      <h1>
        {product.title}
      </h1>

      <button
        className="mt-8 mb-5 py-3 px-6 sm:py-4 sm:px-8 rounded bg-black text-xl sm:text-2xl text-white font-bold"
        onClick={handleCheckOut}
      >
        Check Out
      </button>
    </div>
  )
};

export default GetProductCart;