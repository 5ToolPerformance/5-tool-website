import { defineField, defineType } from "sanity";

export const pricingInfo = defineType({
  name: "pricingInfo",
  title: "Pricing Info",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "price",
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
  ],
});
