import { defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Footer Title",
      type: "string",
      description: "Internal reference name",
    },
    {
      name: "companyInfo",
      title: "Company Information",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Company Name",
          type: "string",
        },
        {
          name: "logo",
          title: "Footer Logo",
          type: "customImage",
          options: {
            hotspot: true,
          },
        },
        {
          name: "description",
          title: "Company Description",
          type: "text",
          rows: 3,
        },
        {
          name: "address",
          title: "Address",
          type: "text",
          rows: 2,
        },
        {
          name: "phone",
          title: "Phone Number",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
      ],
    },
    {
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Link Label",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
              validation: (Rule) =>
                Rule.custom((url) => {
                  if (!url) return "URL is required";
                  if (url.startsWith("/")) return true;
                  if (url.match(/^https?:\/\//)) return true;
                  return "URL must be a valid external URL or internal path starting with /";
                }),
            },
          ],
        },
      ],
    },
    {
      name: "socialMedia",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Instagram", value: "instagram" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "YouTube", value: "youtube" },
                ],
              },
            },
            {
              name: "url",
              title: "Profile URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "bottomBar",
      title: "Bottom Bar",
      type: "object",
      fields: [
        {
          name: "copyrightText",
          title: "Copyright Text",
          type: "string",
        },
        {
          name: "legalLinks",
          title: "Legal Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Link Label",
                  type: "string",
                },
                {
                  name: "url",
                  title: "URL",
                  type: "string",
                  validation: (Rule) =>
                    Rule.custom((url) => {
                      if (!url) return "URL is required";
                      if (url.startsWith("/")) return true;
                      if (url.match(/^https?:\/\//)) return true;
                      return "URL must be a valid external URL or internal path starting with /";
                    }),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
