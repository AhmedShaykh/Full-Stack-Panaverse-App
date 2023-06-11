import React from 'react';
import Navbar from '@/Components/Navbar';
import Kid from '@/Components/Kid';
import Footer from '@/Components/Footer';
import { client } from '@/lib/sanityClient';
import { Image } from 'sanity';

export const getProductData = async () => {

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

const Kids = async () => {

    const data: IProduct[] = await getProductData();

    return (
        <>
            <Navbar />
            {data.length > 0 ? (
                <div className="my-8 grid grid-cols-[repeat(3,auto)] justify-center gap-x-10 gap-y-12">
                    {data.map((item, i: number) => (
                        <div key={i}>
                            <Kid
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                category={item.category.name}
                                dresstype={item.dresstype.name}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-16 px-24 flex justify-center items-center">
                    <h1 className="text-5xl font-extrabold leading-[3rem]">No Products Found</h1>
                </div>
            )}
            <Footer />
        </>
    )
};

export default Kids;