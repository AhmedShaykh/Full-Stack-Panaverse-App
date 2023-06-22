import React, { FC } from "react";
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";
import Image from "next/image";
import Link from "next/link";

interface Props {
    id: string;
    image: IImage;
};

const Slider: FC<Props> = ({ image, id }) => {
    return (
        <>
            <Link href={`products/${id}`}>
                <Image
                    src={urlForImage(image).url()}
                    alt="products"
                    width={370}
                    height={400}
                    className="cursor-pointer transform hover:scale-110"
                />
            </Link>
        </>
    )
};

export default Slider;