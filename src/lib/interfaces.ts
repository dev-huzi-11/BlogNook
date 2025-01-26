export interface Post {
  image: {
    asset: { _id: string; url:  string};
    alt: string;
  };
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
  comments: Array<Comments>
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
}

export interface Comments {
  _id: string;
  name: string;
  comment: string;
  _createdAt: string
}