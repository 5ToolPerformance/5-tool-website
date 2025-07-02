import { defineType, defineField, defineArrayMember } from "sanity";
import { page, baseFields } from "../page";

export const resources = defineType({
  ...page,
  name: "resources",
  title: "Resources",
  fields: [
    ...baseFields,
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "content",
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
      group: "content",
    }),
  ],
});
