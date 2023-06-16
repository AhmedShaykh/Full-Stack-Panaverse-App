import { defineType, defineField } from "sanity";

export const product = defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        defineField({
            name: "title",
            title: "Product Title",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Product Image",
            type: "image"
        }),
        defineField({
            name: "price",
            title: "Product Price",
            type: "number"
        }),
        defineField({
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [
                {
                    type: "category"
                }
            ]
        }),
        defineField({
            name: "dresstype",
            title: "Dress Type",
            type: "reference",
            to: [
                {
                    type: "dresstype"
                }
            ]
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: "title",
                maxLength: 96,
            },
        })
    ]
});