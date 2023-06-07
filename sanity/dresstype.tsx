import { defineType, defineField } from "sanity";

export const dressType = defineType({
    name: "dresstype",
    type: "document",
    title: "Dress Type",
    fields: [
        defineField({
            name: "name",
            title: "Dress Type",
            type: "string"
        })
    ]
});