import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
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
      name: "cta1",
      title: "Call To Action 1",
      type: "callToAction",
    }),
    defineField({
      name: "cta2",
      title: "Call To Action 2",
      type: "callToAction",
    })
  ]
})