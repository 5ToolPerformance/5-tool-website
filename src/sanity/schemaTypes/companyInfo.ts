import { defineType, defineField } from "sanity";

export const companyInfo = defineType({
  name: "companyInfo",
  title: "Company Info",
  type: "document",
  groups: [
    {
      name: "general",
      title: "General",
      default: true,
    },
    {
      name: "social",
      title: "Social",
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Company Name",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "general",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "customImage",
      group: "general",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "youtube",
      title: "Youtube",
      type: "url",
      group: "social",
    }),
  ],
});
