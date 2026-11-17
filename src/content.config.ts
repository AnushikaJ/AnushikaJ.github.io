import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project per language:
//   src/content/projects/en/<slug>.md
//   src/content/projects/de/<slug>.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['industry', 'research']),
    order: z.number(),
    period: z.string(),
    role: z.string(),
    tools: z.array(z.string()),
    // Path under /public, e.g. /projects/snake-robot/cover.jpg. Leave out to show a line drawing.
    cover: z.string().optional(),
    // Line drawing used when there is no cover photo.
    art: z.enum(['gem', 'mudskipper', 'seal', 'heatsink', 'box', 'snake']).optional(),
    coverFit: z.enum(['cover', 'contain']).default('cover'),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    gallery: z.array(z.object({ src: z.string(), caption: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
