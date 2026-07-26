// import { defineField, defineType } from "sanity";

// export default defineType({
//   name: "article",
//   title: "Article",
//   type: "document",
//   fields: [
//     defineField({
//       name: "title",
//       title: "Title",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "excerpt",
//       title: "Excerpt",
//       type: "text",
//       rows: 3,
//       description: "Short summary shown on cards and SEO",
//     }),
//     defineField({
//       name: "mainImage",
//       title: "Main Image",
//       type: "image",
//       options: { hotspot: true },
//       fields: [
//         {
//           name: "alt",
//           type: "string",
//           title: "Alternative Text",
//         },
//       ],
//     }),
//     defineField({
//       name: "category",
//       title: "Category",
//       type: "reference",
//       to: [{ type: "category" }],
//     }),
//     defineField({
//       name: "author",
//       title: "Author",
//       type: "reference",
//       to: [{ type: "author" }],
//     }),
//     defineField({
//       name: "publishedAt",
//       title: "Published At",
//       type: "datetime",
//       initialValue: () => new Date().toISOString(),
//     }),
//     defineField({
//       name: "readTime",
//       title: "Read Time",
//       type: "string",
//       description: "Example: 8 min",
//     }),
//     defineField({
//       name: "featured",
//       title: "Featured Article",
//       type: "boolean",
//       description: "Show this article as featured",
//       initialValue: false,
//     }),
//     defineField({
//       name: "content",
//       title: "Content",
//       type: "array",
//       of: [
//         {
//           type: "block",
//           styles: [
//             { title: "Normal", value: "normal" },
//             { title: "H2", value: "h2" },
//             { title: "H3", value: "h3" },
//             { title: "Quote", value: "blockquote" },
//           ],
//           lists: [
//             { title: "Bullet", value: "bullet" },
//             { title: "Numbered", value: "number" },
//           ],
//           marks: {
//             decorators: [
//               { title: "Bold", value: "strong" },
//               { title: "Italic", value: "em" },
//               { title: "Code", value: "code" },
//             ],
//             annotations: [
//               {
//                 name: "link",
//                 type: "object",
//                 title: "Link",
//                 fields: [
//                   {
//                     name: "href",
//                     type: "url",
//                     title: "URL",
//                   },
//                 ],
//               },
//             ],
//           },
//         },
//         {
//           type: "image",
//           options: { hotspot: true },
//           fields: [
//             {
//               name: "alt",
//               type: "string",
//               title: "Alternative Text",
//             },
//             {
//               name: "caption",
//               type: "string",
//               title: "Caption",
//             },
//           ],
//         },
//       ],
//     }),
//   ],
//   orderings: [
//     {
//       title: "Published Date, New",
//       name: "publishedAtDesc",
//       by: [{ field: "publishedAt", direction: "desc" }],
//     },
//   ],
//   preview: {
//     select: {
//       title: "title",
//       media: "mainImage",
//       category: "category.title",
//       author: "author.name",
//     },
//     prepare({ title, media, category, author }) {
//       return {
//         title,
//         subtitle: [category, author].filter(Boolean).join(" • "),
//         media,
//       };
//     },
//   },
// });




import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary shown on cards and SEO",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: "Example: 8 min",
    }),
    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      description: "Show this article as featured",
      initialValue: false,
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      category: "category.title",
      author: "author.name",
    },
    prepare({ title, media, category, author }) {
      return {
        title,
        subtitle: [category, author].filter(Boolean).join(" • "),
        media,
      };
    },
  },
});