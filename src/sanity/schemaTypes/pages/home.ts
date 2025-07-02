import { defineArrayMember, defineField, defineType } from "sanity";
import { page, baseFields } from "../page";

export const home = defineType({
  ...page,
  name: "home",
  title: "Home",
  fields: [
    ...baseFields,
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember({
          type: "hero",
        }),
        defineArrayMember({
          type: "aboutSection",
        }),
        defineArrayMember({
          type: "coachesSection",
        }),
        defineArrayMember({
          type: "contactSection",
        }),
      ],
      group: "content",
    }),
  ],
});
