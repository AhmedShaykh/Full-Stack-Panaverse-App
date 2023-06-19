import { Image as IImage } from "sanity";

export interface IProduct {
    _id: string;
    title: string;
    image: IImage;
    price: number;
    category: {
        name: string;
    }
    dresstype: {
        name: string;
    }
    slug?: Slug;
};

export interface Props {
    id: string;
    title: string;
    image: IImage;
    price: number;
    dresstype: string;
    category: string;
    slug?: Slug;
};

export interface IData {
    _id: string;
    image: IImage;
};


interface Slug {
    _type: string;
    current: string;
}