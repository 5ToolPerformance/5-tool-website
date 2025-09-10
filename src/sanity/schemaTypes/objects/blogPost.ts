import { defineField, defineType } from "sanity";
import { seoFields } from "../seoFields";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
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
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
      group: "content",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      group: "content",
    }),
    ...Object.entries(seoFields.fields).map(([name, field]) => ({
      ...field,
      group: "seo",
    })),
  ],
});
