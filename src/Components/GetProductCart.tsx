"use client";
import React, { FC } from "react";

const GetProductCart: FC<any> = ({ title, image, price, quantity }) => {
  return (
    <div>
      <h1>
        {title}
      </h1>
    </div>
  )
};

export default GetProductCart;