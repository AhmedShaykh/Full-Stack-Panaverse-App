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
    userId: string;
    title: string;
    image: Array<IImage>;
    price: number;
    quantity: number;
    totalPrice: number;
};

export interface ProductData {
    _id?: string;
    userId?: string;
    title?: string;
    image?: IImage | any;
    price?: number | any;
    quantity?: number;
    totalPrice?: number;
    dresstype?: {
        name?: string | any;
    } | any;
};