import { defineField, defineType } from "sanity";

export const pillar = defineType({
  name: "pillar",
  title: "Pillar",
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
  ],
});
