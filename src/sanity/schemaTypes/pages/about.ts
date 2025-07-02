import { defineType, defineField } from "sanity";
import { page, baseFields } from "../page";

export const aboutPage = defineType({
  ...page,
  name: "aboutPage",
  title: "About Page",
  fields: [
    // Include all fields from the base page
    ...baseFields,
    // Add about page specific fields
    defineField({
      name: "facilityInfo",
      title: "Facility Info",
      type: "text",
      group: "content",
    }),
    defineField({
      name: "facilityImage",
      title: "Facility Image",
      type: "customImage",
      group: "content",
    }),
    defineField({
      name: "companyInfo",
      title: "Company Info",
      type: "text",
      group: "content",
    }),
    defineField({
      name: "companyImage",
      title: "Company Image",
      type: "customImage",
      group: "content",
    }),
  ],
});
