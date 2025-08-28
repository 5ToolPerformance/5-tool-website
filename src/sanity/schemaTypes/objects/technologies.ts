import { defineField, defineType } from "sanity";

export const technology = defineType({
  name: "technology",
  title: "Technology",
  type: "object",
  fields: [
    defineField({
      name: "technology",
      title: "Technology",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
  ],
});
