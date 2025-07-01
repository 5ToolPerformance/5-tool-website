import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
    name: "aboutPage",
    title: "About Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            readOnly: true,
            initialValue: "About",
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "customImage",
        }),
        defineField({
            name: "facilityInfo",
            title: "Facility Info",
            type: "text",
        }),
        defineField({
            name: "facilityImage",
            title: "Facility Image",
            type: "customImage",
        }),
        defineField({
          name: "companyInfo",
          title: "Company Info",
          type: "text",
        }),
        defineField({
          name: "companyImage",
          title: "Company Image",
          type: "customImage",
        })
    ]
}) 