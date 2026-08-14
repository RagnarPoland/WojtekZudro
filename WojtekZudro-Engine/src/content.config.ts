import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    slug: z.string().min(3),
    title: z.string().min(10),
    description: z.string().min(40).max(180),
    date: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum([
      "SEO fundamentals",
      "GEO i AI",
      "SEO techniczne",
      "Content i E-E-A-T",
      "Local SEO",
      "Analityka",
    ]),
    readingTime: z.number().int().positive(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string().min(2)).default([]),
    faq: z
      .array(
        z.object({
          question: z.string().min(10),
          answer: z.string().min(20),
        }),
      )
      .min(1)
      .max(6)
      .optional(),
    ctaLead: z.string().min(15).max(140).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
