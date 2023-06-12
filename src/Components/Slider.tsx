import React, { FC } from 'react';
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";
import Image from 'next/image';

interface Image {
    image: IImage;
};

const Slider: FC<Image> = ({ image }) => {
    return (
        <>
            <Image
                src={urlForImage(image).url()}
                alt="products"
                width={370}
                height={400}
                className="cursor-pointer transform hover:scale-110"
            />
        </>
    )
};

export default Slider;