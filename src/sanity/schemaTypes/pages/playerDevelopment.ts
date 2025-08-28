import { defineType, defineField, defineArrayMember } from "sanity";
import { page, baseFields } from "../page";

export const playerDevelopment = defineType({
  ...page,
  name: "playerDevelopment",
  title: "Player Development",
  fields: [
    ...baseFields,
    defineField({
      name: "ourMission",
      title: "Our Mission",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
      ],
      group: "content",
    }),
    defineField({
      name: "ourApproach",
      title: "Our Approach",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
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
          name: "pillars",
          title: "Pillars",
          type: "array",
          of: [
            defineArrayMember({
              type: "pillar",
            }),
          ],
        }),
      ],
      group: "content",
    }),
    defineField({
      name: "dataCapture",
      title: "Data Capture & Simulation Systems",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "technologies",
          title: "Technologies",
          type: "array",
          of: [
            defineArrayMember({
              type: "technology",
            }),
          ],
        }),
      ],
      group: "content",
    }),
  ],
});
