import React from 'react';
import Navbar from '@/Components/Navbar';
import AllProducts from '@/Components/AllProducts';
import Footer from '@/Components/Footer';
import { client } from '../../../sanity/lib/client';
import { Image } from 'sanity';

export const getProductData = async () => {

    const res = await client.fetch(`
    *[_type=="product"] {
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

const Products = async () => {

    const data: IProduct[] = await getProductData();

    return (
        <>
            <Navbar />
            <div className="my-8 grid grid-cols-[repeat(3,auto)] justify-center gap-x-10 gap-y-12">
                {data.map((item, i: number) => (
                    <div key={i}>
                        <AllProducts
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            category={item.category.name}
                            dresstype={item.dresstype.name}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
};

export default Products;