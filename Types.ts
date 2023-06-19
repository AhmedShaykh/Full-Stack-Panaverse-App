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
};

export interface Props {
    id: string;
    title: string;
    image: IImage;
    price: number;
    dresstype: string;
    category: string;
};

export interface IData {
    _id: string;
    image: IImage;
};