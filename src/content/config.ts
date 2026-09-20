import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(80),
    summary: z.string().max(200), // one-line measurable outcome
    businessQuestion: z.string(),
    domain: z.array(z.enum([
      "analytics",
      "data-science",
      "machine-learning",
      "statistics",
      "software",
      "gis"
    ])).min(1),
    role: z.string(), // e.g., "Individual, coursework"
    context: z.enum(["coursework", "personal", "internship", "competition"]),
    tools: z.array(z.string()).min(1),
    dataSource: z.object({
      name: z.string(),
      licence: z.string(),
      url: z.string().url().optional()
    }),
    outcome: z.string(),
    limitations: z.string(),
    links: z.object({
      repo: z.string().url(),
      demo: z.string().url().optional(),
      notebook: z.string().url().optional(),
    }),
    cover: z.string(),
    coverAlt: z.string(),
    featured: z.boolean().default(false),
    readMinutes: z.number().optional().default(5),
    updated: z.date(),
  }),
});

export const collections = { projects };
