"use client";
import { FC } from 'react';
import { urlForImage } from '../../sanity/lib/image';
import { useRouter } from 'next/navigation';
import Image from "next/image";

const Hero: FC<any> = ({ sale, title, description, image }) => {

    const router = useRouter();

    return (
        <section className="my-16 mx-24 relative flex justify-between gap-16">
            <div className="flex flex-1 flex-col justify-between py-12 pt-0 pb-4">

                <div className="flex flex-col justify-center gap-[2.5rem]">
                    <h3 className="text-[#2B00FF] font-semibold bg-[#e1edff] h-[40px] w-[100px] flex justify-center items-center rounded-lg">
                        Sale {sale}
                    </h3>

                    <h1 className="text-5xl text-black font-extrabold">
                        {title}
                    </h1>

                    <p className="text-lg font-medium text-gray-700 max-w-lg">
                        {description}
                    </p>

                    <button
                        className="bg-black text-white p-4 w-40"
                        onClick={() => router.push("/products")}
                        type="button"
                    >
                        Start Shopping
                    </button>
                </div>
            </div>

            <div className="flex flex-1">
                <div className="bg-[#FFECE3] rounded-full">
                    <Image
                        src={urlForImage(image).url()}
                        alt="hero"
                        width={500}
                        height={600}
                    />
                </div>
            </div>
        </section>
    )
};

export default Hero;