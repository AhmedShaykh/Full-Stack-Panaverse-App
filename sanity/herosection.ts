import { defineType, defineField } from "sanity";

export const herosection = defineType({
    name: "herosection",
    type: "document",
    title: "Herosection",
    fields: [
        defineField({
            name: "sale",
            title: "Sale",
            type: "string"
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Hero Image",
            type: "image"
        })
    ]
});