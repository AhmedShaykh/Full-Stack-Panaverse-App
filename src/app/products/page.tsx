import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import AllProducts from '@/Components/AllProducts';
import { client } from '../../../sanity/lib/client';
import { Image } from 'sanity';

export const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product"] {
        title,
        image,
        price,
        dresstype,
        category -> {
            name
        }
      }
    `);

    return res;
};

interface IProduct {
    title: string;
    image: Image;
    price: number;
    // dresstype: string;
    // category: {
    //     name: string;
    // }
};

const Products = async () => {

    const data: any[] = await getProductData();

    return (
        <>
            <Navbar />
            <div className="my-8 grid grid-cols-[repeat(2,auto)] justify-center gap-x-10">
                {data.map((item, i: number) => (
                    <div key={i}>
                        <AllProducts
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        // dresstype={item.dresstype}
                        // category={item.category.name}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
};

export default Products;