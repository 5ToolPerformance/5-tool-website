import { defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Header Title",
      type: "string",
      description: "Internal reference name",
    },
    {
      name: "logo",
      title: "Logo",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Logo Image",
          type: "customImage",
          options: {
            hotspot: true,
          },
        },
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
        {
          name: "url",
          title: "Logo Link URL",
          type: "string",
          description: "Usually links to homepage",
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
    {
      name: "navigation",
      title: "Navigation Menu",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Menu Label",
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
            {
              name: "openInNewTab",
              title: "Open in New Tab",
              type: "boolean",
              initialValue: false,
            },
            {
              name: "submenu",
              title: "Submenu Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "label",
                      title: "Submenu Label",
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
    },
    {
      name: "ctaButton",
      title: "Call-to-Action Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
        },
        {
          name: "url",
          title: "Button URL",
          type: "string",
          validation: (Rule) =>
            Rule.custom((url) => {
              if (!url) return "URL is required";
              if (url.startsWith("/")) return true;
              if (url.match(/^https?:\/\//)) return true;
              return "URL must be a valid external URL or internal path starting with /";
            }),
        },
        {
          name: "style",
          title: "Button Style",
          type: "string",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
              { title: "Outline", value: "outline" },
            ],
          },
        },
      ],
    },
  ],
});
