import { defineField, defineType } from "sanity";

export const coachesSection = defineType({
  name: "coachesSection",
  title: "Coaches Section",
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
      name: "coaches",
      title: "Coaches",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "coach" }],
          options: {
            // This will show the preview of the coach in the selection
            filter: `_type == "coach"`,
          },
        },
      ],
    }),
    defineField({
      name: "cta",
      title: "Call To Action",
      type: "callToAction",
    }),
  ],
});
