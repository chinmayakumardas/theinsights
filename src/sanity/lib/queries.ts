import { groq } from "next-sanity";

// All articles (for listing page)


export const articlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    featured,
    category->{
      title,
      "slug": slug.current
    },
    author->{
      name,
      image
    }
  }
`;
// Single article by slug
export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content[]{
      ...,
      _key
    },
    mainImage,
    publishedAt,
    readTime,
    featured,

    category->{
      title,
      "slug": slug.current
    },

    author->{
      name,
      image,
      bio
    }
  }
`;

// Featured articles
export const featuredArticlesQuery = groq`
  *[_type == "article" && featured == true] | order(publishedAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    category->{
      title
    }
  }
`;

// Latest articles
export const latestArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    category->{
      title
    }
  }
`;



export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    featured,

    parent->{
      _id,
      title,
      "slug": slug.current
    }
  }
`;


export const pillarCategoriesQuery = groq`
  *[
    _type == "category" &&
    !defined(parent)
  ] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    featured
  }
`;

