import { defineType, defineField } from "sanity";

export const coaches = defineType({
  name: "coaches",
  title: "Coaches",
  type: "document",
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "image",
    }
  },
  fields: [
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
  ]
})