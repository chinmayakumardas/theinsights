export interface Author {
  _id: string;
  name: string;
  slug?: string;
  image?: any;
  bio?: string;
}



export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;

  parent?: {
    _id: string;
    title: string;
    slug: string;
  } | null;

  icon?: string;
  featured?: boolean;
}
export interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  readTime?: string;
  featured?: boolean;

  mainImage?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };

  category?: {
    title: string;
    slug: string;
  };

  author?: {
    name: string;
    image?: unknown;
  };
}