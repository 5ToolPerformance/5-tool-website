import { defineType, defineField, defineArrayMember } from "sanity";

export const resources = defineType({
  name: "resources",
  title: "Resources",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
      initialValue: "Resources",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "customImage",
    }),
    defineField({
      name: "resourceCards",
      title: "Resource Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "resourceCard",
        }),
      ],
    }),
  ],
});
