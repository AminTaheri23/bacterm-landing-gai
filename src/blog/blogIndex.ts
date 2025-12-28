import { parseFrontmatter } from "./parseFrontmatter";

const posts = import.meta.glob("./posts/*.md", { query: "?raw", import: "default", eager: true });

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

export type BlogPost = {
  slug: string;
  content: string;
  meta: BlogPostMeta;
};

export const blogPosts: BlogPost[] = Object.entries(posts).map(([path, raw]) => {
  const slug = path.split("/").pop()!.replace(".md", "");
  const { data, content } = parseFrontmatter(raw as string);

  return {
    slug,
    content,
    meta: {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags,
    },
  };
});
