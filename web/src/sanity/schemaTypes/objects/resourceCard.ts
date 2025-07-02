import { defineType, defineField } from "sanity";

export const resourceCard = defineType({
  name: "resourceCard",
  title: "Resource Card",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
    }),
    defineField({
      name: "cta",
      title: "Call to Action",
      type: "callToAction",
    }),
  ],
});
