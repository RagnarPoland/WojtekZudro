import type { CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

export const POSTS_PER_PAGE = 6;
export const BLOG_BASE = "/blog";

export function sortBlogPosts(posts: BlogEntry[]): BlogEntry[] {
  return [...posts].sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replaceAll(/\s+/g, "-");
}

export function slugToCategory(slug: string, categories: string[]): string | null {
  return categories.find((c) => categoryToSlug(c) === slug) ?? null;
}

export function postUrl(slug: string): string {
  return `${BLOG_BASE}/wpis/${slug}/`;
}

export function categoryUrl(category: string): string {
  return `${BLOG_BASE}/kategoria/${categoryToSlug(category)}/`;
}
