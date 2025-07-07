import { defineField, defineType } from "sanity";
import { seoFields } from "../seoFields";

export const services = defineType({
  name: "services",
  title: "Services",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "image",
    },
  },
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
      group: "content",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "content",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      group: "content",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      group: "content",
    }),

    ...seoFields.fields,
  ],
});
