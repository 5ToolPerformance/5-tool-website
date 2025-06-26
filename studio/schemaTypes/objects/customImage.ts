import { defineField, defineType } from "sanity";

export const customImage = defineType({
    name: "customImage",
    title: "Image",
    type: "image",
    options: {
        hotspot: true,
    },
    fields: [
        defineField({
            name: "alt",
            type: "string",
            title: "Alternative text",
        })
    ]
})