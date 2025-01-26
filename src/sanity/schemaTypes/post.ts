import { Rule } from "sanity";

export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required().error("The image is required."),
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Provide alternative text for accessibility.",
          validation: (Rule: Rule) =>
            Rule.required().error("Alt text is required for images."),
        },
      ],
    },
    
    // Title Field
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().error("The title is required."),
    },

    // Slug Field
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule: Rule) =>
        Rule.required().error("The slug is required."),
    },

    // Published Date Field
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule: Rule) =>
        Rule.required().error("The publish date is required."),
    },

    // Excerpt Field
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "A short summary of the blog post (for previews).",
      validation: (Rule: Rule) =>
        Rule.max(200).warning("Keep the excerpt under 200 characters."),
    },

    // Body Field
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        // Blocks of text
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Provide alternative text for accessibility.",
              validation: (Rule: Rule) =>
                Rule.required().error("Alt text is required for images."),
            },
          //   {
          //     type: "code",
          //     title: "Code Block",
          //     options: { language: "typescript" },
          //   },
          ],
        },
      ],
    },

    // Tags Field
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
  ],
};
