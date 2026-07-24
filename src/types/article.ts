export interface Article {
  id: string;
  slug: string;

  title: string;
  excerpt: string;
  content: string;

  coverImage: string;

 categories: string[];
  publishedAt: string;
  readingTime: string;

  featured: boolean;
  popular: boolean;
}