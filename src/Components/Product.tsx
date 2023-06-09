import React from 'react';
import AllProducts from '@/Components/AllProducts';
import { client } from '../../sanity/lib/client';
import { Image } from 'sanity';

const ProductPage = async (): Promise<React.JSX.Element> => {

    const data: IProduct[] = await getProductData();

    return (
        <>
            <div className="my-8 grid grid-cols-[repeat(2,auto)] justify-center gap-x-10">
                {data.map((item, i: number) => (
                    <div key={i}>
                        <AllProducts
                            index={i}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            dresstype={item.dresstype}
                            category={item.category.name}
                        />
                    </div>
                ))}
            </div>
        </>
    )
};

export default ProductPage;