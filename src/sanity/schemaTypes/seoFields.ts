import { defineField, defineType } from "sanity";

// SEO fields that can be added to any page schema
export const seoFields = defineType({
  name: "seoFields",
  title: "SEO Fields",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Title for search engines (50-60 characters recommended)",
      validation: (Rule) =>
        Rule.max(60).warning("Meta title should be under 60 characters"),
      group: "seo",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description:
        "Description for search engines (150-160 characters recommended)",
      validation: (Rule) =>
        Rule.max(160).warning(
          "Meta description should be under 160 characters"
        ),
      group: "seo",
    }),
    defineField({
      name: "focusKeyword",
      title: "Focus Keyword",
      type: "string",
      description: "Primary SEO keyword for this page",
      group: "seo",
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Canonical URL to prevent duplicate content issues",
      group: "seo",
    }),
    defineField({
      name: "openGraph",
      title: "Open Graph",
      type: "object",
      description: "Open Graph meta tags for social media sharing",
      group: "seo",
      fields: [
        {
          name: "title",
          title: "OG Title",
          type: "string",
          description:
            "Title for social media (falls back to meta title if empty)",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "description",
          title: "OG Description",
          type: "text",
          description:
            "Description for social media (falls back to meta description if empty)",
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "image",
          title: "OG Image",
          type: "image",
          description:
            "Image for social media sharing (1200x630px recommended)",
          options: {
            hotspot: true,
          },
        },
        {
          name: "type",
          title: "OG Type",
          type: "string",
          description: "Open Graph type",
          options: {
            list: [
              { title: "Website", value: "website" },
              { title: "Article", value: "article" },
              { title: "Product", value: "product" },
              { title: "Profile", value: "profile" },
            ],
          },
          initialValue: "website",
        },
      ],
    }),
    defineField({
      name: "twitter",
      title: "Twitter Card",
      type: "object",
      description: "Twitter Card meta tags",
      group: "seo",
      fields: [
        {
          name: "title",
          title: "Twitter Title",
          type: "string",
          description: "Title for Twitter (falls back to meta title if empty)",
          validation: (Rule) => Rule.max(70),
        },
        {
          name: "description",
          title: "Twitter Description",
          type: "text",
          description:
            "Description for Twitter (falls back to meta description if empty)",
          validation: (Rule) => Rule.max(200),
        },
        {
          name: "image",
          title: "Twitter Image",
          type: "image",
          description: "Image for Twitter sharing",
          options: {
            hotspot: true,
          },
        },
        {
          name: "cardType",
          title: "Twitter Card Type",
          type: "string",
          description: "Twitter card type",
          options: {
            list: [
              { title: "Summary", value: "summary" },
              { title: "Summary Large Image", value: "summary_large_image" },
              { title: "App", value: "app" },
              { title: "Player", value: "player" },
            ],
          },
          initialValue: "summary_large_image",
        },
      ],
    }),
    defineField({
      name: "robots",
      title: "Robots Meta",
      type: "object",
      description: "Robot indexing instructions",
      group: "seo",
      fields: [
        {
          name: "noindex",
          title: "No Index",
          type: "boolean",
          description: "Prevent search engines from indexing this page",
          initialValue: false,
        },
        {
          name: "nofollow",
          title: "No Follow",
          type: "boolean",
          description:
            "Prevent search engines from following links on this page",
          initialValue: false,
        },
        {
          name: "noarchive",
          title: "No Archive",
          type: "boolean",
          description: "Prevent search engines from showing cached version",
          initialValue: false,
        },
        {
          name: "nosnippet",
          title: "No Snippet",
          type: "boolean",
          description: "Prevent search engines from showing snippets",
          initialValue: false,
        },
      ],
    }),
    defineField({
      name: "schemaMarkup",
      title: "Schema Markup",
      type: "object",
      description: "Structured data for search engines",
      group: "seo",
      fields: [
        {
          name: "type",
          title: "Schema Type",
          type: "string",
          description: "Type of structured data",
          options: {
            list: [
              { title: "Article", value: "Article" },
              { title: "Product", value: "Product" },
              { title: "FAQ", value: "FAQPage" },
              { title: "How-to", value: "HowTo" },
              { title: "Organization", value: "Organization" },
              { title: "Person", value: "Person" },
              { title: "Local Business", value: "LocalBusiness" },
              { title: "Event", value: "Event" },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "seoAnalysis",
      title: "SEO Analysis",
      type: "object",
      description: "SEO performance metrics",
      group: "seo",
      fields: [
        {
          name: "readabilityScore",
          title: "Readability Score",
          type: "number",
          description: "Content readability score (0-100)",
          validation: (Rule) => Rule.min(0).max(100),
        },
        {
          name: "seoScore",
          title: "SEO Score",
          type: "number",
          description: "Overall SEO score (0-100)",
          validation: (Rule) => Rule.min(0).max(100),
        },
        {
          name: "keywordDensity",
          title: "Focus Keyword Density",
          type: "number",
          description: "Focus keyword density percentage",
          validation: (Rule) => Rule.min(0).max(100),
        },
      ],
    }),
    defineField({
      name: "additionalMeta",
      title: "Additional Meta",
      type: "object",
      description: "Additional SEO metadata",
      group: "seo",
      fields: [
        {
          name: "keywords",
          title: "Meta Keywords",
          type: "array",
          description: "Meta keywords (less important for modern SEO)",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        },
        {
          name: "publishedAt",
          title: "Publication Date",
          type: "datetime",
          description: "When this content was published",
        },
        {
          name: "lastModified",
          title: "Last Modified",
          type: "datetime",
          description: "When this content was last updated",
          readOnly: true,
        },
      ],
    }),
  ],
});
