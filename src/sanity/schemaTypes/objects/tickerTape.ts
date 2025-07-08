import { defineType, defineField } from "sanity";

export const tickerTape = defineType({
  name: "tickerTape",
  title: "Ticker Tape",
  type: "document",
  preview: {
    select: {
      title: "name",
      subtitle: "title",
    },
  },
  fields: [
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Internal reference name",
      initialValue: "Ticker Tape",
      readOnly: true,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "tickerTapeItems",
      title: "Ticker Tape Items",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
