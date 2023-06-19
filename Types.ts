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