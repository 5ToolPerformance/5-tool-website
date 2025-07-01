import { defineArrayMember, defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
      initialValue: "Home",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember({
          type: "hero"
        }),
        defineArrayMember({
          type: "aboutSection"
        }),
        defineArrayMember({
          type: "coachesSection"
        }),
        defineArrayMember({
          type: "contactSection"
        }),
        ],
    })
  ]
})