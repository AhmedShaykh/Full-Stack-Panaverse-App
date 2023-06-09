import React from 'react';
import { client } from '../../sanity/lib/client';
import Navbar from '@/Components/Navbar';
// import Hero from '@/Components/Hero';
import Footer from '@/Components/Footer';
import { Image } from 'sanity';
import Event from '@/Components/Event';

export const HeroData = async () => {

    const res = await client.fetch(`
    *[_type=="herosection"] {
        sale,
        title,
        description,
        image,
      }
    `);

    return res;

};

interface Types {
    sale: string;
    title: string;
    description: string;
    image: Image;
};

const Home = async () => {

    const data: Types[] = await HeroData();

    return (
        <>
            <Navbar />
            {data.map((item, i: number) => (
                <div key={i}>
                    {/* <Hero
                        sale={item.sale}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    /> */}
                    <Event />
                </div>
            ))}
            <Footer />
        </>
    )
};

export default Home;