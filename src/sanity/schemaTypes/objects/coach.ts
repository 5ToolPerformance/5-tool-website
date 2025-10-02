import { defineType, defineField } from "sanity";

export const coach = defineType({
  name: "coach",
  title: "Coaches",
  type: "document",
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "image",
    },
  },
  fields: [
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "philosophy",
      title: "Philosophy",
      type: "text",
    }),
    defineField({
      name: "expertise",
      title: "Expertise",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
  ],
});
