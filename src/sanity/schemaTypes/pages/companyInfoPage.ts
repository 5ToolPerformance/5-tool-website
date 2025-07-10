import { defineType, defineField, defineArrayMember } from "sanity";
import { page, baseFields } from "../page";

export const companyInfoPage = defineType({
  ...page,
  name: "companyInfoPage",
  title: "Company Info Page",
  fields: [
    // Include all fields from the base page
    ...baseFields,
    // Add about page specific fields
    defineField({
      name: "companyInfo",
      title: "Company Info",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
      group: "content",
    }),
  ],
});
