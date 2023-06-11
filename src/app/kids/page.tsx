"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar';
import { client } from '@/lib/sanityClient';
import Footer from '@/Components/Footer';
import { Image } from 'sanity';

// export const getProductData = async () => {

//     const res = await client.fetch(`
//     *[_type=="product" && category -> name == "Kids"] {
//         title,
//         image,
//         price,
//         category -> {
//             name
//         },
//         dresstype -> {
//             name
//         }
//       }
//     `);

//     return res;
// };

interface IProduct {
    title: string;
    image: Image;
    price: number;
    category: {
        name: string;
    }
    dresstype: {
        name: string;
    }
};

const Kids = async () => {

    const [data, setData] = useState<any>([""]);

    useEffect(() => {
        async function fetchData() {
            const res = await client.fetch(`
        *[_type=="product" && category -> name == "Kids"] {
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

            setData(res);
        }

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            {data.length > 0 ? (
                <div className="my-8 grid grid-cols-[repeat(3,auto)] justify-center gap-x-10 gap-y-12">
                    {data.map((product: any) => (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <img src={product.image} alt={product.title} />
                            <p>Price: ${product.price}</p>
                            {/* <p>Category: {product.category.name}</p>
                            <p>Dresstype: {product.dresstype.name}</p> */}
                        </div>
                    ))}
                </div>
            ) : (
                <h1>No products found</h1>
            )}
            <Footer />
        </>
    )
};

export default Kids;