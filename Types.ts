import { Image as IImage } from "sanity";

export interface IProduct {
    _id: string;
    title: string;
    image: IImage;
    price: number;
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
};

export interface IData {
    _id: string;
    image: IImage;
};

export interface Product {
    _id: string;
    name: string;
    price: number;
    totalPrice: number;
    subcat: string;
    image: Array<IImage>;
    userId: string;
    quantity: number;
};