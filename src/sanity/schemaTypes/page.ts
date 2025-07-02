import { defineType, defineField } from "sanity";
import { seoFields } from "./seoFields";

// Create base fields array
const baseFields = [
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (Rule) => Rule.required(),
    group: "content",
  }),
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96,
    },
    validation: (Rule) => Rule.required(),
    group: "content",
  }),
  defineField({
    name: "heroImage",
    title: "Hero Image",
    type: "customImage",
    group: "content",
  }),
  // Add SEO fields with proper grouping
  ...Object.entries(seoFields.fields).map(([name, field]) => ({
    ...field,
    group: "seo",
  })),
];

// Define the page type
export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: baseFields,
});

// Export base fields for extension
export { baseFields };
